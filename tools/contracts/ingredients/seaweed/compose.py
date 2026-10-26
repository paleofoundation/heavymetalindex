"""Compose the seaweed synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction records in
data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed/extraction/. Total and
inorganic arsenic are never interchanged; dried-as-sold, dry-weight and wet results are
never compared as if they shared a basis.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed'

gems = 'who-gemsfood-heavy-metal-contaminants'; efsa = 'efsa2023-heavy-metals-seaweed'; fsanz = 'fsanz2012-seaweed-inorganic-arsenic-au'
rose = 'rose2007-seaweed-arsenic-forms-uk'; dui = 'duinker2020-macroalgae-food-feed-safety'; ich6 = 'ichikawa2006-hijiki-cooking-arsenic'
ich10 = 'ichikawa2010-hijiki-arsenic-metabolism'; lap = 'laparra2003-seaweed-arsenic-bioaccessibility'; alm = 'almela2002-algae-food-arsenic-metals'
hwa = 'hwang2010-dried-seaweed-korea-metals'; sha = 'shaughnessy2023-sugar-kelp-new-england-metals'; hah = 'hahn2022-salish-seaweed-contaminants'
ron = 'ronan2017-laminaria-ascophyllum-ias-ireland'; tay = 'taylor2016-new-england-seaweed-arsenic'; hua = 'huang2020-hijiki-arsenic-growth-stages'
sund = 'sund2026-saccharina-pte-processing'; shi = 'shimoda2010-commercial-hijiki-arsenic-speciation'; mat = 'matsumoto-tanibuchi2019-seaweed-seafood-ias'
llo = 'llorente-mirandes2011-commercial-seaweed-arsenic'; mar = 'martinleon2021-edible-seaweeds-canary-metals-nitrates'; kim = 'kim2023-korea-fishery-products-metals'
che = 'cheyns2021-algae-cyanobacteria-supplements-arsenic'; gro = 'groleau2025-inuit-fish-broth-metals-pregnancy'; lim = 'lim2015-korea-kriefs-dietary-exposure-pb-cd-hg'
song = 'song2017-china-dietary-cadmium-exposure'; wang = 'wang2019-dietary-lead-guangzhou'; fech = 'fechner2022-bfr-meal-hg-cd-pb-ni-germany'
cn = 'china2022-gb-2762-contaminants-original'; eu = 'eu-2023-915-contaminants-maximum-levels'; euni = 'eu-2024-1987-nickel-maximum-levels'
anz = 'fsanz2024-schedule-19-contaminants'; sfa = 'sfa2026-food-regulations-heavy-metals'; thai = 'thaimoph2020-notification-414-contaminants-food'
e14 = 'efsa2014-dietary-exposure-iAs'; e09 = 'efsa-arsenic-contam-2009'; e21 = 'efsa2021-chronic-exposure-iAs'; e24 = 'efsa2024-organoarsenic-species'
cher = 'cherry2019-edible-seaweeds-risks-benefits'; cam = 'camurati2019-edible-macroalgae-arsenic-review'; own = 'ownsworth2019-estuarine-macroalgae-elements'
cao = 'cao2014-sargassum-pallidum-arsenic-speciation'; nis = 'nischwitz2006-commercial-kelp-arsenic-speciation'; sun = 'sundhar2023-gulf-mannar-seaweed-metals'
car = 'cardoso2023-mercury-portuguese-coast-seafood'; dia = 'diaz2012-chile-algae-arsenic'; nep = 'nepper-davidsen2023-kelp-biomass-composition-nz'
gs12 = 'garcia-salgado2012-edible-algae-arsenic-speciation'; mcs = 'mcsheehy2000-edible-algae-arsenic-speciation'; sim = 'sim2024-inorganic-arsenic-seaweed-hplc'
mor = 'morita1990-marine-macroalgae-arsenic-forms'; tuk = 'tukai2002-sydney-macroalgae-arsenic-speciation'; sir = 'siregar2025-australian-brown-macroalgae-arsenic'
ort = 'ortega-flores2023-mexican-sargassum-arsenic'; zha = 'zhao2014-edible-seaweed-arsenic-digestion'; e10 = 'efsa-lead-contam-2010'; e12 = 'efsa2012-cadmium-dietary-exposure-europe'
fab = 'fabricant2007-arsenic-in-herbal-kelp-supplements-concentration-regulations-and'; lor = 'lorenzana2009-seafood-arsenic-speciation'; vh = 'vanhulle2004-laminaria-arsenic-metabolism'
shc = 'shchukin2018-brown-algae-metals'; khan = 'khandaker2021-malaysian-seaweed-metalloids'; bra = 'bralatei2017-seaweed-inorganic-arsenic-field-method'

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
 P(('Inorganic arsenic decides most seaweed questions, and it depends far more on the type of seaweed than on where it was bought.', []),
   ('Hijiki is the clear outlier: nine retail hijiki products in the United Kingdom averaged 77 mg/kg inorganic arsenic as sold, and WHO GEMS/Food hijiki submissions had a median of 47 mg/kg (10 results, 2010–2024).', [rose, gems]),
   ('Nori, wakame and most kombu sold in Australia and Europe measured about 0.1–0.3 mg/kg, two to three orders of magnitude lower on the same dried-as-sold basis.', [fsanz, efsa])),
 P(('Total arsenic is high in almost every seaweed but is mostly organic arsenosugars, so a total arsenic result cannot stand in for inorganic arsenic.', [efsa, gs12, tay]),
   ('Dried kombu in GEMS/Food had a median of 47 mg/kg total arsenic while the same dried-kombu category had a median of 0.23 mg/kg inorganic arsenic.', [gems]),
   ('Two kelps break the pattern: Norwegian oarweed (Laminaria digitata) had a median of 21 mg/kg inorganic arsenic dry weight, against 0.037 mg/kg in tangle (Laminaria hyperborea) from the same monitoring programme.', [dui])),
 P(('Cadmium is the second metal to watch and it ranks the types differently.', []),
   ('In European monitoring, dried laver (nori) averaged 1.68 mg/kg cadmium and dried wakame 1.28 mg/kg, against 0.46 mg/kg in dried kombu, so the lowest inorganic arsenic types are not the lowest cadmium types.', [efsa]),
   ('Lead and mercury are usually low: most dried-seaweed mercury results in GEMS/Food were below a 50 µg/kg detection limit, and dried nori lead had a median of about 0.14 mg/kg.', [gems])),
 P(('For buyers, the supported priorities are to avoid hijiki or require an inorganic arsenic result for it, to specify the kelp species, and to ask for a cadmium result on nori, wakame and laver products.', [rose, dui, efsa]),
   ('Soaking and boiling remove a large share of arsenic from hijiki and other brown seaweeds into the water, which must then be discarded, but they leave a measurable residue and do little for cadmium.', [ich6, lap, own, sund])),
],
'identity': [
 P(('This page covers edible marine macroalgae: brown seaweeds such as kombu and other kelps (Laminaria, Saccharina), wakame (Undaria), hijiki (Sargassum fusiforme), arame and the wracks (Fucus, Ascophyllum); red seaweeds such as nori and laver (Porphyra, Pyropia), dulse and Irish moss; and green seaweeds such as sea lettuce (Ulva).', [efsa, dui]),
   ('Results stay separate by seaweed type because types differ systematically, and kelp species are named where the source names them.', [dui, ron])),
 P(('Spirulina, chlorella and other microalgae or cyanobacteria are not seaweed and are excluded, as are foods that only contain seaweed, such as sushi rolls, seaweed snacks mixed with other ingredients, dashi broth and seasoning salts, unless the seaweed itself was measured.', [che, efsa, gems]),
   ('Kelp supplements made from dried seaweed are shown as their own form and are never pooled with seaweed foods.', [che, nis])),
 P(('The basis matters as much as the type.', []),
   ('Fresh seaweed is roughly 85% water, so a fresh-weight concentration is several times lower than a dry-weight one for the same plant, and Australia and New Zealand express their seaweed limit at 85% hydration.', [fsanz, anz]),
   ('This page keeps dry-weight laboratory results, dried products as sold, fresh or wet results and prepared (soaked or cooked) results apart, and never converts between them without the measured moisture of that sample.', [rose, efsa])),
],
'occurrence': [
 P(('The table holds every seaweed result extracted from 78 sources: WHO GEMS/Food monitoring summarised by seaweed type, product form, basis and WHO region, agency reports and published surveys.', [gems, efsa, dui, fsanz]),
   ('Each row is one statistic a source reports for one seaweed group and metal, so a mean, a median and individual samples appear as separate rows.', [efsa, hah, sha]),
   ('Total arsenic, inorganic arsenic and dimethylarsinic acid are separate metals in the table, and other arsenic species are kept in the evidence records rather than shown as rows.', [gs12, efsa])),
 P(('Ratings place a mean, median or single result against a pooled HMI seaweed reference for the same metal and basis, built from every compatible sampling family: GEMS/Food subgroup medians, individual sample values and published subgroup medians.', [gems, dui, hah, sha]),
   ('All seaweed types share one reference per basis, so a High rating for hijiki inorganic arsenic means high among seaweeds, not high against a safety threshold.', [rose, gems]),
   ('Non-detects stay as intervals, and 54 rows whose values could not be reconciled with their own papers are shown with the reason and not compared.', [sun, khan, mar])),
],
'pathways': [
 P(('Seaweeds take up metals directly from seawater across their whole surface, so concentrations reflect the water they grew in, the species and the age of the tissue rather than any soil.', [cher, dui, hah]),
   ('Brown seaweeds accumulate arsenic as arsenate because it behaves like phosphate, and laboratory work on hijiki showed arsenate uptake competing with phosphate.', [hua, cam]),
   ('Most of that arsenic is converted to arsenosugars, which is why total arsenic of 20–100 mg/kg dry weight is common in kelp while inorganic arsenic usually stays below 1 mg/kg.', [gs12, tay, efsa])),
 P(('Hijiki and its Sargassum relatives are the exception because they retain a large inorganic fraction.', [dui, rose]),
   ('In Norwegian monitoring, wireweed (Sargassum muticum) had a median of 51 mg/kg inorganic arsenic dry weight and imported hijiki 59 mg/kg, while the other species had medians of 0.23 mg/kg or less except oarweed and sea oak (7.6 mg/kg).', [dui]),
   ('Inorganic arsenic in farmed Chinese hijiki rose through the season, from 40 mg/kg in January to 58 mg/kg dry weight in May.', [hua])),
 P(('Cadmium and lead follow local water and tissue age.', []),
   ('In New England sugar kelp, the young base of the blade carried more cadmium and total arsenic than the old tip at every site, while lead and mercury were higher at known contaminated sites.', [sha]),
   ('In the Salish Sea, lead exceeded 9 mg/kg dry weight only at shipyard and harbour sites, and bull kelp at the same sites carried about twice the cadmium of rockweed.', [hah])),
],
'variation': [
 P(('For inorganic arsenic, the lowest observed types on a dried-as-sold basis are nori, wakame, dulse and most kombu.', [fsanz, efsa, gems]),
   ('Australian retail nori averaged 0.11 mg/kg, wakame 0.18 mg/kg and kombu 0.22 mg/kg, and European dried wakame averaged 0.19 mg/kg and dried laver 0.17 mg/kg.', [fsanz, efsa]),
   ('Hijiki is consistently highest in every study that measured it, at 38–96 mg/kg as sold, so avoiding hijiki is a supported sourcing preference rather than a tentative pattern.', [rose, gems, mat, shi])),
 P(('Within kelp, species matters more than origin.', []),
   ('Oarweed (Laminaria digitata) had 21 mg/kg inorganic arsenic dry weight in Norway, 30–62 mg/kg in Irish blades and 8.3 mg/kg in Maine, while tangle, sugar kelp and Japanese kombu (Saccharina) were at 0.02–0.16 mg/kg in Norway.', [dui, ron, tay]),
   ('A product sold simply as kelp can therefore differ more than a hundredfold, which is why the species name on the specification matters.', [dui, ron])),
 P(('Cadmium reverses part of that order.', []),
   ('Dried laver had the highest cadmium mean among European seaweed groups (1.68 mg/kg) and dried wakame was next (1.28 mg/kg), while dried kombu averaged 0.46 mg/kg and dulse 0.46 mg/kg.', [efsa]),
   ('In a Canary Islands market survey, kombu and wakame of declared Galician origin averaged 0.085 and 0.070 mg/kg cadmium dry weight against 0.42 and 0.75 mg/kg for Asian kombu and wakame, about five and eleven times lower, a within-study origin difference that has not been tested elsewhere.', [mar]),
   ('These are tentative origin patterns from one study, not a reliable sourcing preference for a country.', [])),
 P(('Lead and mercury rarely separate the types.', [gems, dui]),
   ('Norwegian medians for lead were 0.19–0.93 mg/kg dry weight across common species and mercury medians were 0.005–0.024 mg/kg, and green seaweeds such as gutweed and green sea fingers had the highest lead (0.67–1.4 mg/kg).', [dui]),
   ('Lower inorganic arsenic in nori therefore comes with higher cadmium, and the choice between them depends on which metal matters most for the product.', [efsa, fsanz])),
],
'processing': [
 P(('Soaking and boiling move arsenic out of seaweed into the water, and the water is where it ends up.', [ich6, lap, own]),
   ('Japanese-style soaking of dried hijiki eluted 22–32% of total arsenic, and boiling the soaked hijiki eluted a further 53–62%, mostly as arsenate.', [ich6]),
   ('Boiling dried hijiki for 20 minutes lowered inorganic arsenic from 54 to 31 mg/kg dry weight, while baking nori did not change its arsenic.', [lap])),
 P(('Commercial processing of hijiki makes a large difference.', []),
   ('Open-steamed Japanese hijiki products carried 9–14 mg/kg water-soluble inorganic arsenic dry weight against 51–71 mg/kg for boiled or closed-steam products.', [shi]),
   ('In Scottish and Japanese kelp, a soup preparation removed 75–96% of inorganic arsenic from the solid seaweed, a 10–20 second blanch 3–61% and a cold soak about 65%.', [own])),
 P(('Cadmium and lead respond much less.', []),
   ('Pulsed electric field and warm-water treatment of Norwegian sugar kelp lowered iodine by up to 25% but did not lower cadmium, mercury or lead on a dry-weight basis; cadmium rose from 0.33 to 0.43 mg/kg after warm water.', [sund]),
   ('Boiling Alaria in Nunavik lowered total arsenic but not cadmium, lead or mercury, and the arsenic moved into the broth.', [gro])),
],
'controls': [
 P(('Controls for seaweed act at four points: species and type choice, growing site and harvest, processing, and household preparation.', []),
   ('The best supported are choosing low-arsenic types and kelp species, which changes inorganic arsenic by two orders of magnitude, and soaking then boiling with the water discarded, which removes much of the arsenic that remains.', [dui, rose, ich6, own]),
   ('Siting and harvest controls are observational: farmed sugar kelp in northern Norway had more than four times the cadmium of southern farms, and using the old blade tip rather than the base lowered cadmium in New England kelp.', [dui, sha])),
],
'tradeoffs': [
 P(('Choosing the lowest arsenic type can raise cadmium.', []),
   ('Nori and wakame, the usual low inorganic arsenic choices, carried the highest cadmium means in European data (1.3–1.7 mg/kg dried).', [efsa]),
   ('Kombu is lower in cadmium but includes oarweed, one of the highest inorganic arsenic kelps.', [efsa, dui])),
 P(('Preparation trades contaminant removal for nutrients and flavour.', [own, sund]),
   ('Boiling removes 50–90% of iodine from sugar kelp along with arsenic, and soaking water from hijiki carried 3 mg/kg inorganic arsenic, so it must not be reused for cooking.', [dui, rose]),
   ('Farming is not a guaranteed fix: farmed and wild sugar kelp in New England had similar cadmium and total arsenic exceedance rates.', [sha])),
],
'testing': [
 P(('A useful seaweed test must report inorganic arsenic by a speciation method, not total arsenic alone.', [efsa, gs12]),
   ('Total arsenic in kombu is typically 40–60 mg/kg as sold while inorganic arsenic is around 0.2 mg/kg, so a total arsenic result cannot show whether a product meets an inorganic arsenic limit.', [gems, fsanz]),
   ('Methods also differ in what they count as inorganic: some studies measured only water-extractable arsenate, which understates inorganic arsenic in hijiki, where 47% of the arsenic in a reference material was not extracted.', [shi, 'narukawa2020-hijiki-crm-arsenosugars-interlab'])),
 P(('State the basis on every result: dry weight, dried product as sold, or fresh weight.', [efsa, anz]),
   ('Australian and New Zealand limits are written at 85% hydration, so a dried hijiki result of 7.8 mg/kg corresponds to about 1.4 mg/kg at that basis.', [fsanz, anz]),
   ('Several surveys reported values below their own detection limits or reference-material recoveries far from certified values; those results are held here and should not be used to clear a lot.', [sun, mar])),
],
'procurement': [
 P(('Specify the seaweed type and, for kelp, the species, and require inorganic arsenic results for hijiki, Sargassum products and Laminaria digitata.', [dui, ron, fsanz]),
   ('Limits differ by market: Australia and New Zealand set 1 mg/kg inorganic arsenic for seaweed at 85% hydration, Singapore 2 ppm inorganic arsenic and 2 ppm cadmium for seaweed, and Thailand 2 mg/kg cadmium for dried seaweed.', [anz, sfa, thai]),
   ('China sets lead at 0.5 mg/kg for fresh algae and 1.0 mg/kg for algae products, and the EU sets nickel at 30 mg/kg for seaweed and 40 mg/kg for wakame from July 2025.', [cn, euni])),
 P(('The EU has no general cadmium, lead or arsenic limit for seaweed food; its 3.0 mg/kg cadmium limit applies to supplements made at least 80% from dried seaweed.', [eu]),
   ('Ask for cadmium results on nori, laver and wakame, which most often approach the 2 mg/kg limits used in Singapore and Thailand.', [efsa, hwa, sfa, thai]),
   ('Record growing area separately from the packing or purchase market, because most monitoring identifies only the market.', [gems, efsa])),
],
'product': [
 P(('Seaweed is eaten in small portions, so concentration alone does not set exposure.', [efsa, wang]),
   ('In European consumption data, seaweed added little to population cadmium exposure, but adult seaweed consumers reached a mean of 3.1 µg/kg body weight per week of cadmium, mainly from laver.', [efsa]),
   ('In Guangzhou, algae supplied 4.7% of dietary lead overall and 7.1% for people aged 60 and over, and in China seaweed supplied 2.4% of dietary cadmium.', [wang, song])),
 P(('Hijiki changes the picture for inorganic arsenic.', []),
   ('EFSA estimated that adult high consumers of hijiki eating 10 g a day of prepared hijiki would take in about 1.6 µg/kg body weight per day of inorganic arsenic.', [e14]),
   ('A Spanish survey calculated that 1.7 g a day of one dried hijiki product would reach the former WHO tolerable weekly intake for inorganic arsenic.', [alm])),
 P(('Kelp supplements are concentrated: one Belgian kelp product carried 4.7 mg/kg inorganic arsenic, and seaweed supplements are covered by the EU 3.0 mg/kg cadmium limit.', [che, eu]),
   ('Foods that contain seaweed were not measured together with the seaweed in them, so a product result cannot be attributed to its seaweed content.', [efsa, fech])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to seaweed or names it, plus every seaweed row in WHO GEMS/Food and the HMI indexes; each has a recorded decision based on its content.', []),
   ('Seventy-eight sources contribute table rows; most others are reviews, mentions of microalgae, or incidental matches.', [cher, cam]),
   ('Fifty-four rows from twelve sources are held because their values contradict their own methods or tables.', [sun, khan, mar])),
 P(('Gaps remain.', []),
   ('Few studies follow the same lots through commercial processing, few report growing origin for retail products, and the Vietnamese supplement standard could not be located.', [sund, shi, gems]),
   ('Several compilations, such as Japanese cumulative arsenic data, repeat values from primary studies and are treated as context to avoid double counting.', ['uneyama2007-arsenic-foods-cumulative-data', lor, fab])),
],
}

headings = {'summary': 'Seaweed overview', 'identity': 'Seaweed identity and scope', 'occurrence': 'Heavy metal contamination profile of seaweed',
 'pathways': 'Sources and contamination pathways', 'variation': 'Variation by seaweed type, origin and preparation', 'processing': 'Processing effects and seaweed derivatives',
 'controls': 'Heavy metal mitigation and remediation for seaweed', 'tradeoffs': 'Trade-offs and failure modes', 'testing': 'Sampling and testing seaweed for heavy metals',
 'procurement': 'Procurement and process control', 'product': 'Finished-product and exposure implications', 'assessment': 'Evidence review, methods and research gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Edible marine macroalgae (brown, red, green), separated by type and, for kelp, by species.', efsa, dui),
             A('Microalgae, cyanobacteria and seaweed-containing composite foods are excluded; kelp supplements are a separate form.', che, gems),
             A('Dry weight, dried as sold, fresh and prepared bases are kept separate with no conversion.', rose, anz)],
'summary': [A('Inorganic arsenic is the deciding metal; hijiki (about 47–77 mg/kg as sold) is far above nori, wakame and most kombu (about 0.1–0.3 mg/kg).', rose, gems, fsanz),
            A('Oarweed is a high inorganic arsenic kelp (median 21 mg/kg dry weight in Norway).', dui),
            A('Cadmium is highest in laver and wakame (1.3–1.7 mg/kg dried means in Europe).', efsa)],
'occurrence': [A('Pb, Cd, total and inorganic As, DMA, total Hg, MeHg, Ni, Cr, Al and U from 78 sources.', gems, efsa, dui),
               A('Pooled HMI references per metal and basis use GEMS/Food medians, sample values and published medians.', gems, hah, sha),
               A('Held values are shown with reasons and not compared.', sun, khan)],
'pathways': [A('Uptake from seawater; arsenate taken up like phosphate and converted to arsenosugars.', hua, gs12),
             A('Hijiki and Sargassum species retain a large inorganic arsenic fraction.', dui, rose),
             A('Cadmium and lead follow local water and tissue age.', sha, hah)],
'variation': [A('Lowest inorganic arsenic: nori, wakame, dulse and most kombu; highest: hijiki.', fsanz, efsa, rose),
              A('Within kelp, oarweed is high and tangle, sugar kelp and Saccharina kombu low.', dui, ron),
              A('Cadmium is highest in laver and wakame; Galician kombu and wakame lower than Asian in one study.', efsa, mar)],
'processing': [A('Soaking and boiling hijiki elute most arsenic into the water.', ich6, lap),
               A('Open-steam hijiki processing carries far less water-soluble inorganic arsenic than boiling.', shi),
               A('Processing does not lower cadmium or lead in sugar kelp.', sund, gro)],
'controls': [A('Type and species choice changes inorganic arsenic by two orders of magnitude.', dui, rose),
             A('Soak and boil with the water discarded.', ich6, own),
             A('Northern siting and blade base raise cadmium in kelp (observational).', dui, sha)],
'tradeoffs': [A('Low-arsenic nori and wakame carry the most cadmium.', efsa),
              A('Boiling removes iodine with arsenic; soaking water carries arsenic.', dui, rose),
              A('Farmed and wild sugar kelp had similar exceedance rates.', sha)],
'testing': [A('Report inorganic arsenic by speciation; total arsenic cannot show compliance.', efsa, fsanz),
            A('Water-extractable arsenate methods understate hijiki inorganic arsenic.', shi, gs12),
            A('State the basis; Australian and New Zealand limits apply at 85% hydration.', anz, fsanz)],
'procurement': [A('Specify type and kelp species; require iAs results for hijiki, Sargassum and oarweed.', dui, ron),
                A('Seaweed limits: ANZ iAs 1 mg/kg; Singapore iAs and Cd 2 ppm; Thailand Cd 2 mg/kg; China Pb 0.5–1.0; EU Ni 30–40.', anz, sfa, thai, cn, euni),
                A('EU has no general seaweed food limit for Cd, Pb or As; 3.0 mg/kg Cd for seaweed supplements.', eu)],
'product': [A('Seaweed consumers reached 3.1 µg/kg bw per week of cadmium in EFSA data.', efsa),
            A('Hijiki high consumers: about 1.6 µg/kg bw per day inorganic arsenic.', e14),
            A('Kelp supplements can be concentrated; no paired product and seaweed measurements exist.', che, fech)],
'assessment': [A('Every tagged or naming source and every seaweed dataset row has a content decision; 78 sources contribute rows.', gems, efsa),
               A('Fifty-four rows from twelve sources held for integrity conflicts.', sun, khan, mar),
               A('Gaps: growing origin, paired processing studies, one inaccessible supplement standard.', gems, efsa)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which seaweeds have the lowest inorganic arsenic?',
  P(('Nori, wakame, dulse and Saccharina kombu were lowest, at about 0.1–0.3 mg/kg in Australian and European dried products as sold and 0.02–0.16 mg/kg dry weight in Norwegian monitoring.', [fsanz, efsa, dui]),
    ('Rockweed (Ascophyllum) was also low, mostly below 0.07 mg/kg dry weight in Irish samples.', [ron]),
    ('These are the lowest observed types in each study; a single product can still differ, so a result for the lot is the reliable check.', []))),
 ('Is all kelp high in arsenic?',
  P(('No.', []),
    ('All kelps carry tens of mg/kg total arsenic, but inorganic arsenic ranges from about 0.02 mg/kg in Norwegian Saccharina kombu to 21 mg/kg in oarweed, and up to 87 mg/kg in decaying Irish oarweed tips.', [dui, ron]),
    ('The species name, not the word kelp, decides the inorganic arsenic.', [dui]))),
 ('Does origin change cadmium in nori and wakame?',
  P(('Possibly.', []),
    ('In one Canary Islands survey, Asian kombu and wakame had about five and eleven times the cadmium of Galician products, and Korean laver from the west coast averaged 0.69 mg/kg against 0.50 mg/kg from the south coast.', [mar, hwa]),
    ('Neither difference has been confirmed by another study.', []))),
],
'testing': [
 ('Why is total arsenic not enough for seaweed?',
  P(('Because most seaweed arsenic is organic.', [gs12, tay]),
    ('In GEMS/Food, dried kombu had a median of 47 mg/kg total arsenic but 0.23 mg/kg inorganic arsenic, so total arsenic overstates the inorganic form about two-hundredfold in that product.', [gems]),
    ('Only hijiki and a few kelps carry inorganic arsenic at a large share of the total.', [rose, dui]))),
],
'processing': [
 ('Does cooking hijiki make it lower in arsenic?',
  P(('Yes, if the soaking and cooking water is discarded.', [ich6, lap]),
    ('Soaking and boiling together removed most arsenic in Japanese tests, and boiling alone lowered inorganic arsenic from 54 to 31 mg/kg dry weight.', [ich6, lap]),
    ('Prepared hijiki in the UK still averaged 11 mg/kg inorganic arsenic wet weight, far above other prepared seaweeds.', [rose]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in seaweed?',
  P(('Arsenic, cadmium, lead and mercury are measured in most seaweed surveys, and arsenic is present at the highest concentrations.', [efsa, gems]),
    ('Most of that arsenic is organic; inorganic arsenic is high mainly in hijiki and a few kelps, while cadmium is highest in laver and wakame.', [rose, dui, efsa])),
  'EFSA 2023 Tables 3–8; GEMS/Food seaweed records'),
 ('ING-FAQ-02', 'How do heavy metals get into seaweed?',
  P(('Seaweed absorbs metals from the surrounding seawater through its whole surface.', [cher, dui]),
    ('Brown seaweeds take up arsenate like phosphate and turn most of it into arsenosugars, while hijiki keeps much of it as inorganic arsenic.', [hua, gs12])),
  'Huang 2020 Fig. 4; García-Salgado 2012 Table 3'),
 ('ING-FAQ-03', 'Is organic seaweed free from heavy metals?',
  P(('No source in the library compares organic-certified and conventional seaweed, so there is no evidence that an organic label lowers metals.', []),
    ('Metal levels follow the seaweed type and the water it grew in, which certification does not control.', [dui, hah])),
  'No comparative source; Duinker Table 2; Hahn Results 3.4'),
 ('ING-FAQ-04', 'Which types of seaweed have the lowest levels?',
  P(('For inorganic arsenic, nori, wakame, dulse and Saccharina kombu were lowest, and hijiki highest.', [fsanz, efsa, dui]),
    ('For cadmium, kombu and dulse were lower than laver and wakame, so no type is lowest for every metal.', [efsa])),
  'FSANZ Table 1; EFSA Tables 3 and 6; Duinker Tables 2–3'),
 ('ING-FAQ-05', 'Which regions produce seaweed with the lowest levels?',
  P(('Origin comparisons are few.', []),
    ('One Canary Islands survey found Galician kombu and wakame lower in cadmium than Asian products, and Korean west-coast laver higher than south-coast laver, but species differences are far larger than these origin differences.', [mar, hwa])),
  'Martín-León Table 4; Hwang Table 3'),
 ('ING-FAQ-06', 'Do products made from seaweed also contain heavy metals?',
  P(('Seaweed supplements can, because they are concentrated dried seaweed: one Belgian kelp supplement carried 4.7 mg/kg inorganic arsenic.', [che]),
    ('Foods that contain seaweed, such as snacks or sushi, were not measured together with their seaweed, so their results cannot be attributed to it.', [efsa, fech])),
  'Cheyns Table 1; EFSA 2023 section 2.4'),
 ('ING-FAQ-07', 'What do the levels in seaweed mean for health?',
  P(('For most people seaweed adds little to metal intake because portions are small.', [efsa, song]),
    ('Regular hijiki eaters are the exception: EFSA estimated about 1.6 µg/kg body weight per day of inorganic arsenic for high consumers, and several food agencies advise against eating hijiki.', [e14, rose, e21])),
  'EFSA 2014 section 4; Rose section 4; Cherry p. 322'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in seaweed?',
  P(('Yes, in some markets: Australia and New Zealand set 1 mg/kg inorganic arsenic at 85% hydration, Singapore 2 ppm inorganic arsenic and cadmium, Thailand 2 mg/kg cadmium for dried seaweed, and China 0.5–1.0 mg/kg lead for algae.', [anz, sfa, thai, cn]),
    ('The EU limits nickel in seaweed (30 mg/kg, wakame 40 mg/kg) and cadmium in seaweed supplements (3.0 mg/kg).', [euni, eu])),
  'Schedule 19 S19-4; SFA reg. 31; MOPH 414; GB 2762 Table 1; EU 2024/1987; EU 2023/915 3.2.21.2'),
 ('ING-FAQ-09', 'Can soaking or cooking remove heavy metals from seaweed?',
  P(('Soaking and boiling remove much of the arsenic, especially from hijiki, as long as the water is thrown away.', [ich6, lap, own]),
    ('They do little for cadmium and lead, which stayed the same or rose on a dry-weight basis after processing sugar kelp.', [sund, gro])),
  'Ichikawa Table 4; Laparra Table 2; Ownsworth section 3.3; Sund Table 3'),
 ('ING-FAQ-10', 'What is the difference between total and inorganic arsenic in seaweed?',
  P(('Total arsenic counts every form, and in seaweed most of it is organic arsenosugars, which are much less toxic than inorganic arsenic.', [gs12, efsa]),
    ('Limits and health assessments for seaweed are written for inorganic arsenic, so a total arsenic result alone cannot show compliance.', [anz, sfa])),
  'García-Salgado 2012 Table 3; Schedule 19; SFA reg. 31'),
 ('ING-FAQ-13', 'Should pregnant women or children avoid any seaweed?',
  P(('The supported advice concerns hijiki: food agencies in the United Kingdom, Australia and New Zealand advised against eating it because of its inorganic arsenic.', [rose, e21]),
    ('A review also cites Australian and New Zealand advice for pregnant women to limit brown seaweed to one portion a week.', [cher])),
  'Rose section 4; FSANZ section 1; Cherry p. 323'),
 ('ING-FAQ-17', 'Should I stop eating seaweed?',
  P(('The evidence supports avoiding hijiki, not seaweed in general.', [rose, efsa]),
    ('Nori, wakame and kombu measured far lower in inorganic arsenic, though nori and wakame carry more cadmium.', [fsanz, efsa])),
  'Rose Table 1; FSANZ Table 1; EFSA Table 3'),
 ('SEAWEED-FAQ-01', 'Why is hijiki so much higher in arsenic than other seaweeds?',
  P(('Hijiki keeps much of the arsenic it absorbs as inorganic arsenate instead of converting it to arsenosugars.', [rose, gs12]),
    ('About 60–70% of its total arsenic is inorganic, against under 1% in most kelp and nori.', [rose, tay])),
  'Rose Table 1; Taylor Table 1'),
 ('SEAWEED-FAQ-02', 'Is kelp or kombu high in arsenic?',
  P(('Kombu is high in total arsenic but usually low in inorganic arsenic, around 0.2 mg/kg as sold.', [fsanz, gems]),
    ('Oarweed (Laminaria digitata) is the exception, with 8–62 mg/kg inorganic arsenic dry weight in studies from Norway, Ireland and Maine.', [dui, ron, tay])),
  'FSANZ Table 1; Duinker Table 2; Ronan Table 1; Taylor Table 1'),
 ('SEAWEED-FAQ-03', 'Is nori high in cadmium?',
  P(('Nori is among the higher cadmium seaweeds.', [efsa, hwa]),
    ('Dried laver averaged 1.68 mg/kg in European monitoring and Korean laver 0.61 mg/kg dry weight, near or above the 0.5–2 mg/kg limits used in some markets.', [efsa, hwa, sfa])),
  'EFSA Table 3; Hwang Table 3'),
 ('SEAWEED-FAQ-04', 'Is fresh seaweed lower in metals than dried?',
  P(('Fresh seaweed has lower concentrations per kilogram only because it is mostly water.', [fsanz, efsa]),
    ('European fresh kombu averaged 0.20 mg/kg cadmium against 0.46 mg/kg for dried kombu, which reflects water content rather than a cleaner product.', [efsa])),
  'FSANZ section 3; EFSA Table 3'),
 ('SEAWEED-FAQ-05', 'Is farmed seaweed lower in metals than wild?',
  P(('Not consistently.', []),
    ('Farmed and wild sugar kelp in New England had similar cadmium and total arsenic, and farmed sugar kelp in northern Norway carried more cadmium than southern farms.', [sha, dui])),
  'Shaughnessy Table 3; Duinker section 3'),
 ('SEAWEED-FAQ-06', 'Does seaweed contain mercury?',
  P(('Usually very little.', [gems, dui]),
    ('Most dried-seaweed mercury results in GEMS/Food were below a 50 µg/kg detection limit, and Norwegian medians were 0.005–0.024 mg/kg dry weight.', [gems, dui])),
  'GEMS/Food mercury records; Duinker Table 6'),
 ('SEAWEED-FAQ-07', 'Are kelp supplements a concern?',
  P(('They can be, because supplements are dried seaweed taken daily.', [che, nis]),
    ('Belgian kelp supplements ranged from 0.07 to 4.7 mg/kg inorganic arsenic, and the EU caps cadmium at 3.0 mg/kg in supplements made mainly from seaweed.', [che, eu])),
  'Cheyns Table 1; EU 2023/915 3.2.21.2'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-seaweed-v1', 'family': 'ingredient', 'slug': 'seaweed', 'title': 'Seaweed', 'display_title': 'Seaweed', 'version': 1, 'date': '2026-10-22',
     'description': 'Arsenic, cadmium, lead and mercury in edible seaweeds: hijiki, kelp, nori and wakame compared, preparation effects, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Seaweed FAQs', 'aliases': []},
     'key_evidence': [
       {'label': 'Exposure', 'text': 'Adult seaweed consumers reached 3.1 µg/kg body weight per week of cadmium in EFSA data, mainly from laver.', 'href': '#finished-product-and-exposure-implications', 'link_label': 'Exposure'},
       {'label': 'Limits', 'text': 'Australia and New Zealand limit inorganic arsenic in seaweed to 1 mg/kg; Singapore 2 ppm.', 'href': '#procurement-and-process-control', 'link_label': 'Limits by market'},
       {'label': 'Key distinction', 'text': 'Hijiki carries 40–80 mg/kg inorganic arsenic; nori, wakame and most kombu about 0.1–0.3 mg/kg.', 'href': '#variation-by-seaweed-type-origin-and-preparation', 'link_label': 'Variation'}],
     'scope': {'analytes': 'Pb, Cd, total As, inorganic As, DMA, total Hg, MeHg, Ni, Cr, Al, U; total and inorganic arsenic never interchanged', 'material_form': 'Edible marine macroalgae by type and species; kelp supplements a separate form; microalgae and seaweed-containing foods excluded',
               'basis': 'Dry weight, dried product as sold, fresh/wet and prepared kept separate; µg/kg; no basis conversion', 'geography_market': 'Growing area, collection site, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years 1987–2024 where reported; unreported dates stay unknown', 'stage': 'Growing site, harvest, processing, preparation, procurement and testing',
               'population_route': 'Dietary ingestion; exposure assessments and total diet shares', 'comparator_outcome': 'Pooled HMI seaweed reference positions by metal and basis; same-study subgroup contrasts; measured preparation effects'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to seaweed or naming it or its aliases, plus seaweed rows in WHO GEMS/Food and the HMI indexes',
                'protocol_ref': 'data/evidence/contracts/seaweed/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed/extraction/'],
                'screening_ref': 'data/evidence/contracts/seaweed/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search'],
                'unresolved_access': ['Vietnam QCVN 20-1:2024/BYT health-supplement standard']},
     'source_catalogue': {'topic': 'ingredients/seaweed'}, 'retain_history_only': True}

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

quick = P(('Inorganic arsenic is the metal to check in seaweed: hijiki carries about 47–77 mg/kg as sold, while nori, wakame and most kombu measure about 0.1–0.3 mg/kg.', [rose, gems, fsanz]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Inorganic arsenic in hijiki and oarweed; cadmium in laver and wakame; lead and mercury usually low.', [rose, dui, efsa]),
 ('Main drivers', 'Seaweed type and kelp species, growing water and tissue age, and preparation.', [dui, sha, ich6]),
 ('Practical framing', 'Avoid hijiki, name the kelp species, and ask for inorganic arsenic and cadmium results.', [rose, dui, efsa])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-seaweed-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-11', 'status': 'covered', 'reason': 'Fresh versus dried is answered in SEAWEED-FAQ-04 and Identity; seaweed has no whole/refined fraction pair.'},
 {'id': 'ING-FAQ-12', 'status': 'deferred', 'reason': 'No matched metal comparison of seaweed with a commonly confused alternative in the ledger.'},
 {'id': 'ING-FAQ-14', 'status': 'covered', 'reason': 'Cooking effects are answered in ING-FAQ-09 and the Processing supporting question.'},
 {'id': 'ING-FAQ-15', 'status': 'covered', 'reason': 'Soaking is answered in ING-FAQ-09 with measured hijiki and kelp results.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative weekly seaweed serving guidance for metals beyond hijiki advice; no frequency is invented.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
URL = {dui: 'https://www.hi.no/', rose: 'https://doi.org/10.1080/02652030701557477', ich6: 'https://doi.org/10.1016/j.fct.2006.03.002', lap: 'https://doi.org/10.1021/jf034747r',
       own: 'https://doi.org/10.1016/j.marenvres.2019.104781', shi: 'https://doi.org/10.1248/jhs.56.48', sund: 'https://doi.org/10.1007/s10811-025-03596-9', sha: 'https://doi.org/10.1038/s41598-023-44685-4',
       hua: 'https://doi.org/10.1007/s10811-020-02083-7', ron: 'https://doi.org/10.1016/j.foodchem.2017.06.144', hah: 'https://doi.org/10.1371/journal.pone.0269269', fsanz: 'https://www.foodstandards.gov.au/',
       gro: 'https://doi.org/10.1016/j.envres.2025.120000', efsa: 'https://doi.org/10.2903/sp.efsa.2023.EN-7798'}
def meta(sid):
    import re
    fm = (root / f'wiki/sources/{sid}.md').read_text().split('---')[1]
    m = re.search(r'^doi:\s*"?([^"\n]+)"?', fm, re.M)
    return f'https://doi.org/{m.group(1).strip()}' if m and m.group(1).strip() not in ('null', '') else URL.get(sid, f'../sources/{sid}')
def control(i, sid, label, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, scale, consumer=False):
    return {'id': f'seaweed-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': meta(sid), 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/seaweed.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Seaweed', 'audiences': ['supplier', 'brand'] + (['consumer'] if consumer else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Iodine, texture and other metals change with the same step; not quantified unless stated.',
            'verification_summary': 'Confirm with lot results that report inorganic arsenic by speciation and state the basis.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational survey' if kind == 'observational' else 'Measured preparation or processing comparison' if kind == 'measured' else 'Agency or author guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Avoids high-accumulating material, or moves soluble arsenic into water that is discarded.',
            'uncertainty': uncertainty, 'calculation': 'Percentages as reported or computed from the source table means where stated.', 'basis_yield_mass_balance': 'Concentrations stay on the source basis; mass yield is not reported unless stated.',
            'other_contaminants': 'Not assessed unless listed in outcomes.', 'nutrition_quality_yield': 'Iodine and minerals can fall with arsenic; not quantified unless stated.', 'waste_destination': 'Soaking and cooking water carries the removed arsenic.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'replicated controlled trial', 'next_action': 'Keep effect as reported; no pooled effect size is calculated.'}], 'review': {'record_ref': 'data/evidence/contracts/seaweed/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis='Dry weight'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': 'Source-reported values on the stated basis.'}
controls = [
 control(1, dui, 'Duinker et al. 2020', 'sourcing and procurement', 'Choose tangle or Saccharina over oarweed kelp', 'observational', 'Norwegian monitoring, 2014–2019, kelp species',
   'Oarweed (Laminaria digitata) had a median of 21 mg/kg inorganic arsenic dry weight (n = 40) against 0.037 mg/kg in tangle (L. hyperborea, n = 4).',
   'Two kelp species from the same national monitoring programme.',
   [out('iAs', 'lower', 21000, 37, 'Lower inorganic arsenic in tangle (observational)', 'Median inorganic arsenic', 'Oarweed versus tangle', 'Table 2')],
   'Kelp products where the species can be specified.', 'Observational; tangle n = 4.', 'National monitoring'),
 control(2, rose, 'Rose et al. 2007', 'sourcing and procurement', 'Avoid hijiki', 'measured', 'UK retail seaweed, 2003',
   'Hijiki averaged 77 mg/kg inorganic arsenic as sold (n = 9); arame, wakame and kombu were below 0.3 mg/kg. UK agencies advised against eating hijiki.',
   'Hijiki versus other dried seaweeds bought in the same survey.',
   [out('iAs', 'lower', 77000, 300, 'Lower inorganic arsenic in other dried seaweeds', 'Mean inorganic arsenic as sold', 'Hijiki versus kombu (below 0.3 mg/kg)', 'Table 1', 'Dried product as sold')],
   'Any purchasing decision between seaweed types.', 'Other types are below the detection limit; their value is an upper bound.', 'Retail survey', True),
 control(3, ich6, 'Ichikawa et al. 2006', 'home preparation', 'Soak dried hijiki and discard the water', 'measured', 'Dried hijiki from Japan, Korea and China',
   'A 30-minute soak in water eluted 22–32% of total arsenic, mostly as arsenate, into water that is then discarded.',
   'Arsenic eluted into soaking water as a share of the dried hijiki total.',
   [out('tAs', 'lower', 32500, 23100, 'Lower total arsenic after soaking', 'Total arsenic in hijiki', 'Before versus after a 30-minute soak (one origin, duplicate samples)', 'Table 4')],
   'Household preparation of dried hijiki.', 'Three origins, duplicate samples; residue after soaking computed from eluted arsenic.', 'Laboratory', True),
 control(4, ich6, 'Ichikawa et al. 2006', 'home preparation', 'Boil soaked hijiki and discard the water', 'measured', 'Dried hijiki from Japan, Korea and China',
   'Boiling the soaked hijiki for 20 minutes at 90 °C eluted a further 53–62% of total arsenic, mostly arsenate.',
   'Arsenic eluted into cooking water as a share of the dried hijiki total.',
   [out('tAs', 'lower', 32500, 6000, 'Lower total arsenic after soaking and boiling', 'Total arsenic remaining in hijiki', 'Before versus after soak and boil (one origin, duplicate samples)', 'Table 4')],
   'Household preparation of dried hijiki.', 'The residue was not speciated.', 'Laboratory', True),
 control(5, lap, 'Laparra et al. 2003', 'home preparation', 'Boil hijiki; baking nori has no effect', 'measured', 'Retail hijiki and nori, Valencia',
   'Boiling hijiki for 20 minutes lowered inorganic arsenic from 54.3 to 30.6 mg/kg dry weight; baking nori did not change arsenic.',
   'Same product before and after preparation.',
   [out('iAs', 'lower', 54300, 30600, 'Lower inorganic arsenic after boiling hijiki', 'Inorganic arsenic', 'Raw versus boiled hijiki', 'Table 2'),
    out('tAs', 'lower', 99400, 65300, 'Lower total arsenic after boiling hijiki', 'Total arsenic', 'Raw versus boiled hijiki', 'Table 2')],
   'Household preparation.', 'One product per type.', 'Laboratory', True),
 control(6, own, 'Ownsworth et al. 2019', 'home preparation', 'Prepare kelp as soup or soak rather than a brief blanch', 'measured', 'Scottish and Japanese kelp',
   'A soup preparation removed 75–96% of inorganic arsenic from the solid seaweed, a cold soak about 65% and a 10–20 second blanch 3–61%; the arsenic moved into the liquid.',
   'Same seaweed before and after each preparation.',
   [out('iAs', 'lower', None, None, 'Lower inorganic arsenic in the solid seaweed', 'Inorganic arsenic loss', 'Soup preparation (75–96% loss)', 'Section 3.3')],
   'Kelp eaten after soaking or cooking; the soup liquid keeps the arsenic.', 'Few samples; ranges as reported.', 'Laboratory', True),
 control(7, shi, 'Shimoda et al. 2010', 'food processing', 'Prefer open-steam processed hijiki', 'observational', 'Commercial Japanese hijiki products',
   'Open-steamed products had 9.2–13.6 mg/kg water-soluble inorganic arsenic dry weight against 51–71 mg/kg for boiled or closed-steam products.',
   'Products from different processing systems, not paired lots.',
   [out('iAs', 'lower', 51100, 13600, 'Lower water-soluble inorganic arsenic in open-steam products', 'Water-soluble inorganic arsenic', 'Boiled or closed-steam versus open-steam products', 'Table 4')],
   'Purchasing processed hijiki.', 'Not paired lots; water-soluble fraction only.', 'Retail products'),
 control(8, sund, 'Sund et al. 2026', 'food processing', 'Do not rely on blanching-type processing to lower cadmium or lead', 'measured', 'Farmed sugar kelp, Norway, 2023',
   'Warm-water treatment and pulsed electric fields lowered iodine by up to 25% but did not lower cadmium, mercury or lead on a dry-weight basis.',
   'Unprocessed versus processed portions of one harvest batch.',
   [out('Cd', 'higher', 330, 430, 'Higher cadmium after warm-water treatment', 'Cadmium', 'Unprocessed versus warm-water treated', 'Table 3'),
    out('Pb', 'higher', 54, 83, 'Higher lead after warm-water treatment', 'Lead', 'Unprocessed versus warm-water treated', 'Table 3')],
   'Industrial pre-treatment of kelp.', 'One batch, n = 3; dry-weight concentrations rise as soluble matter is lost.', 'Pilot processing'),
 control(9, dui, 'Duinker et al. 2020', 'aquaculture', 'Consider farm latitude for cadmium in sugar kelp', 'observational', 'Farmed sugar kelp, Norway',
   'Farmed sugar kelp in the north (68–70°N) had cadmium above 1.0 mg/kg dry weight, more than four times the southern farms; inorganic arsenic showed no such trend.',
   'Northern versus southern Norwegian farms.',
   [out('Cd', 'context', None, None, 'Higher cadmium at northern farms', 'Cadmium', 'North versus south', 'Section 3')],
   'Siting new kelp farms.', 'Observational; site effects confounded with other factors.', 'National monitoring'),
 control(10, sha, 'Shaughnessy et al. 2023', 'harvest and collection', 'Use the older blade tip rather than the base for lower cadmium', 'observational', 'Wild and farmed sugar kelp, New England',
   'The young base of the blade had more cadmium and total arsenic than the distal tip at every site; base cadmium exceeded the EU feed limit in 80–88% of samples, tips in none.',
   'Base versus distal tip of the same blades.',
   [out('Cd', 'context', None, None, 'Lower cadmium in blade tips', 'Cadmium exceedance share', 'Base (80–88%) versus tip (0%)', 'Tables 3–4')],
   'Harvest and trimming of kelp blades.', 'Observational; exceedance against a feed limit used by the authors.', 'Field survey'),
 control(11, hua, 'Huang et al. 2020', 'harvest and collection', 'Harvest hijiki earlier in the season', 'observational', 'Farmed hijiki, Zhejiang, China, 2016',
   'Inorganic arsenic in the native variety rose from 40.3 mg/kg dry weight in January to 58.0 mg/kg in May.',
   'Monthly harvests from the same farm.',
   [out('iAs', 'lower', 58000, 40290, 'Lower inorganic arsenic in early-season hijiki', 'Inorganic arsenic', 'May versus January harvest', 'Table 1')],
   'Hijiki farming.', 'One farm and season; still far above other seaweeds.', 'Farm survey'),
 control(12, fsanz, 'FSANZ 2010 survey', 'lot acceptance and release', 'Test imported hijiki for inorganic arsenic at the border', 'guidance', 'Imported hijiki, Australia',
   'All 10 imported hijiki consignments tested from July to December 2010 complied with the 1 mg/kg limit; earlier consignments had failed.',
   'Border testing against the Australia and New Zealand limit.',
   [out('iAs', 'context', None, None, 'Detection, not removal', 'Compliance share', '10 of 10 consignments compliant', 'Section 1')],
   'Import control of hijiki.', 'Testing detects contamination; it does not lower it.', 'Regulatory programme'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
