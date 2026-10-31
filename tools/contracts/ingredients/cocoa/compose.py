"""Compose the cocoa synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction
records in data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/extraction/.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa'

fda = 'fda2022-tds-elements-fy2018-fy2020'; gems = 'who-gemsfood-heavy-metal-contaminants'
abt = 'abt2018-cadmium-lead-cocoa-chocolate-us-market'; abt20 = 'abt2020-perspective-cadmium-lead-cocoa-chocolate'
kat = 'kataoka2018-japan-chocolate-cocoa-cadmium'; han = 'hands2024-multiyear-dark-chocolate-cocoa-usa'; ays = 'asyousow2022-expert-investigation-cocoa-chocolate-products'
fe19 = 'fechner2019-cocoa-origin-al-cd-exposure'; fe22 = 'fechner2022-bfr-meal-hg-cd-pb-ni-germany'; oli = 'oliveira2021-cocoa-beans-cd-pb-brazil-processing'
are = 'arevalo-gardini2017-peru-cacao-regional-metals'; rom = 'romero-estevez2019-ecuador-cocoa-cd-ni-pb'; bur = 'burgon2023-cocoa-bean-to-bar-brazil-metals-ota'
bra = 'bravo2024-cadmium-cacao-arauca'; tho = 'thomas2023-peru-cacao-cd-distribution'; ram = 'ramtahal2016-cacao-cadmium-trinidad'; blo = 'blommaert2022-cd-cacao-translocation'
wad = 'wade2022-cacao-cadmium-drivers'; vit = 'vitola2016-cocoa-beans-heavy-trace-elements'; sta = 'stahl2017-aluminum-food-contact-part1'
j91 = 'jecfa-91st-cadmium-2022'; e12 = 'efsa2012-cadmium-dietary-exposure-europe'; eni15 = 'efsa2015-nickel-food-water'; eni20 = 'efsa-nickel-contam-2020'
fs19 = 'fsanz2019-25th-australian-total-diet-study'; fs11 = 'fsanz2011-23rd-australian-total-diet-study'; cfs = 'cfs2013-hktds-metallic-contaminants'
cxc = 'codex-cxc-81-2022'; cxs = 'codex-cxs-193-1995'; eu = 'eu-2023-915-contaminants-maximum-levels'; euni = 'eu-2024-1987-nickel-maximum-levels'
hk = 'hongkong2025-cap-132v-metallic-contamination'; fsc = 'fsanz2024-schedule-19-contaminants'; mer = 'mercosur2011-gmc-res-12-inorganic-contaminants'
cn = 'usda-fas2023-china-gb-2762-2022-translation'; sfa = 'sfa2026-food-regulations-heavy-metals'; nom = 'cofepris2013-nom-186-cacao-chocolate-contaminants'
veg = 'vega-jara2025-cocoa-cd-mitigation-amf-biochar'; lop = 'lopez2022-cacao-biochar-cadmium'; gut = 'gutierrez2022-ecuador-cacao-cadmium-compost'
cha = 'chang2022-cocoa-fermentation-rhizobium-cadmium'; gar = 'garciaporras2025-cadmium-cacao-farmland'; met = 'meter2019-cadmium-cacao-lac-review'
amj = 'amjad2021-lahore-chocolates-metals'; eno = 'enogbe2025-bwari-chocolate-metals'; ear = 'efsa-arsenic-contam-2009'; fda1990 = 'fda2021-otc-monograph-m016-skin-protectant'

def P(*sentences):
    """Join (sentence, sources) pairs; each cited sentence gets its own placement."""
    text = ' '.join(s for s, _ in sentences)
    keys = []
    for _, src in sentences:
        for k in src:
            if k not in keys: keys.append(k)
    spans = [{'after': s, 'source_keys': src} for s, src in sentences if src]
    return {'text': text, 'source_keys': keys, 'citation_spans': spans} if keys else {'text': text, 'source_keys': []}

n_sources = sum(1 for f in (audit / 'extraction').glob('*.json') if json.loads(f.read_text())['disposition'] == 'occurrence_extracted')

# ------------------------------------------------------------------ visible prose
prose = {
'summary': [
 P(('Cadmium is the metal that sets cocoa apart, and it travels with the cocoa solids.', []),
   ('In the US retail survey by Abt and colleagues, mean cadmium was 700 µg/kg in cocoa powder, 270 µg/kg in dark chocolate and 60 µg/kg in milk chocolate.', [abt]),
   ('In Japan, the median rose from 23 µg/kg in chocolate under 50% cocoa to 250 µg/kg at 80% or more.', [kat]),
   ('Lead, by contrast, is usually lower and is driven more by what happens to the bean after harvest than by where it grew.', [ays, abt20])),
 P(('Growing origin is the strongest supported lever for cadmium.', []),
   ('In industry bean testing compiled for a California settlement, median bean cadmium was 55–94 µg/kg for Nigeria, Côte d’Ivoire, Ghana, Cameroon and Brazil, against 511 µg/kg for Ecuador, 542 µg/kg for Peru and 892 µg/kg for Venezuela.', [ays]),
   ('The international cadmium assessment found the same pattern in cocoa powder, with a mean of 141 µg/kg in the mainly African cluster and 1,601 µg/kg in the mainly South and Central American cluster.', [j91]),
   ('The low-cadmium origins are not lower in lead, so origin choice addresses one metal, not both.', [ays, oli])),
 P(('For a buyer, the supported priorities are lot results for cadmium with the cocoa-solids content stated, and cleaning and shelling controls for lead.', [eu, ays]),
   ('The EU limits cadmium at 0.10 to 0.80 mg/kg in chocolate according to cocoa content and at 0.60 mg/kg in cocoa powder, and the Codex Alimentarius standard sets 0.3 to 0.9 mg/kg for chocolate and 2.0 mg/kg for cocoa powder.', [eu, cxs]),
   ('Chocolate supplied about 4% of dietary cadmium across European age groups and close to 10%, with other cocoa products, for school-age children; JECFA judged cocoa a minor contributor overall.', [e12, j91])),
],
'identity': [
 P(('Cocoa comes from the seeds of Theobroma cacao, which are fermented, dried, cleaned and roasted, then separated into shell and nib.', [cxc, oli]),
   ('Ground nibs form cocoa liquor, which is pressed into cocoa butter and a cake milled into cocoa powder; chocolate combines liquor, butter, sugar and, in milk chocolate, milk solids.', [oli, ays])),
 P(('These fractions behave differently for metals, so this page keeps them apart.', []),
   ('In a pilot run on Bahia beans, cadmium was 60 µg/kg in the liquor and 111 µg/kg in the powder, while the cocoa butter was below the 1.5 µg/kg quantification limit.', [oli]),
   ('Bean shells carry much of the lead: in industry testing the median shell lead was 341 µg/kg against 1.2 µg/kg in the separated nibs.', [ays])),
 P(('The page covers beans and nibs, liquor, butter, natural and alkalised cocoa powder, sweetened drinking-chocolate powder sold as powder, and dark, milk and white chocolate.', []),
   ('Foods that only contain cocoa, such as chocolate milk, cakes, cereals, spreads and filled or coated confectionery, are outside its scope, as is cocoa butter used as a skin-protectant drug.', [fda, gems, fda1990]),
   ('Beans are usually reported on a dry-weight basis and products as sold, and the two are not converted into each other.', [are, abt])),
],
'occurrence': [
 P((f'The table holds every cocoa and chocolate result extracted from {n_sources} survey, farm, total diet, monitoring and assessment sources: one row for each statistic a source reports for a subgroup, form and metal.', [gems, fda, abt, ays, j91]),
   ('Ratings place a mean, median or single result against a pooled reference for the same cocoa form, built from WHO GEMS/Food region-by-year medians, individual products and batches, and published subgroup medians; non-detects remain intervals and are never read as zero.', [gems, abt, kat, fe22]),
   ('Rows that failed a check against their own paper stay visible with the reason and are not compared.', [amj, eno, rom])),
 P(('Cadmium and lead dominate the evidence; nickel, total arsenic, mercury, chromium, aluminium and tin are reported by fewer sources.', [gems, eni15, fe22]),
   ('Nickel is high in cocoa compared with most foods: European monitoring averaged about 9,500 µg/kg in cocoa beans and products and 3,800 µg/kg in chocolate, and a German cocoa powder pool held 11,050 µg/kg.', [eni15, fe22]),
   ('Arsenic results are almost all totals, and nearly every European inorganic-arsenic result for chocolate and cocoa powder was below a limit of about 20 µg/kg.', [gems])),
],
'pathways': [
 P(('Cadmium enters the bean from the soil through the roots, and soil conditions explain much of the difference between farms.', [wad, ram]),
   ('A synthesis of studies across the cacao belt ranked total soil cadmium and soil pH as the strongest predictors of bean cadmium, and its model lowered bean cadmium from about 1.65 to 1.0–1.1 mg/kg as soil pH rose from 5 to about 7.', [wad]),
   ('In Trinidad, nib cadmium tracked leaf cadmium closely (r = 0.79) but total soil cadmium only weakly (r = 0.35).', [ram])),
 P(('Within the tree, cadmium reaching the nib travels mainly through the branches rather than from the leaves.', [blo]),
   ('In a high-accumulating cultivar at the Trinidad genebank, nibs averaged 2,050 µg/kg, and in Peru two nearby Piura sites differed tenfold, at 7.12 and 0.72 mg/kg, with flood-plain soils transferring cadmium to beans about 3.5 times more readily.', [blo, tho])),
 P(('Lead mostly arrives on the outside of the bean after harvest, through soil and dust during fermentation, drying, transport and storage.', [ays, abt20]),
   ('In a factory study, separated shells held 163 µg/kg lead and nibs 15.2 µg/kg, cleaning lowered whole-bean lead from 95.2 to 39.7 µg/kg, and dust collected from the cleaners carried 2,370–3,130 µg/kg.', [ays]),
   ('The same investigation attributed about 70% of the lead in nibs to contact during bean breaking and winnowing.', [ays])),
 P(('Aluminium and nickel follow the cocoa solids as well.', []),
   ('German monitoring found a mean of 146 mg/kg aluminium in cocoa powder, and data compiled by a German state laboratory gave medians of 160 mg/kg in powder and 39 mg/kg in chocolate.', [fe19, sta])),
],
'variation': [
 P(('For cadmium, West African beans are consistently the lowest measured.', [ays, j91]),
   ('Industry bean testing gave medians of 55 µg/kg for Nigeria, 60 µg/kg for Côte d’Ivoire, 70 µg/kg for Ghana and 90 µg/kg for Cameroon, against 246 µg/kg for the Dominican Republic, 359 µg/kg for Indonesia, 511 µg/kg for Ecuador and 542 µg/kg for Peru.', [ays]),
   ('In the international assessment, cocoa powder averaged 141 µg/kg in the mainly African cluster, 609 µg/kg in Indonesia and 1,601 µg/kg in the mainly South and Central American cluster, and cocoa liquor showed the same order.', [j91]),
   ('In the US retail survey, products of Latin American origin had higher cadmium than those of African origin after allowing for cocoa content.', [abt])),
 P(('Within producing countries the range is wide, so a country name alone does not settle a lot.', []),
   ('Peruvian regional bean means ran from 0.17 mg/kg in Cuzco to 1.78 mg/kg in Tumbes, although the authors found the regional differences not statistically significant.', [are]),
   ('Ecuadorian province means ran from about 0.3 mg/kg in Napo to about 1.7 mg/kg in Guayas, and Brazilian beans averaged 60 µg/kg from Bahia but 129 µg/kg from Pará and 1,153 µg/kg in four Ecuadorian samples in the same study.', [rom, oli]),
   ('Genotype also matters: in Peru the native Chuncho type averaged 0.17 mg/kg against 0.90 mg/kg for CCN 51 and 1.80 mg/kg for spontaneous hybrids.', [are])),
 P(('For lead, the lowest results do not come from the low-cadmium origins.', []),
   ('Industry bean medians for lead were 5–10 µg/kg for the Dominican Republic, Ecuador and Peru and 25 µg/kg for Côte d’Ivoire, Ghana, Nigeria and Cameroon.', [ays]),
   ('In Brazil, the four Ecuadorian bean samples had the highest cadmium and the lowest lead in the study.', [oli]),
   ('Because lead depends on post-harvest handling, the useful comparison for lead is between handling and cleaning practices, not between countries.', [ays])),
 P(('Among products, milk and white chocolate are the lowest for both metals because they hold the least cocoa.', [abt, kat, gems]),
   ('Milk chocolate averaged 60 µg/kg cadmium and 10 µg/kg lead in the US survey, against 270 and 30 µg/kg in dark chocolate and 700 and 110 µg/kg in cocoa powder, and white chocolate cadmium was near or below detection.', [abt, kat, gems]),
   ('Organic labelling did not mean lower cadmium: certified-organic products averaged about 400 µg/kg more cadmium in a multi-year US analysis, and a German organic milk chocolate pool held 56 µg/kg against 16 µg/kg for the conventional pool.', [han, fe22])),
 P(('For nickel, which the EU has limited in chocolate and cocoa powder since July 2025, the supported comparison is between products rather than origins.', [euni]),
   ('Milk chocolate measured 700–1,000 µg/kg in German and US total diet samples, against 2,800 µg/kg in dark chocolate and 10,600–11,050 µg/kg in cocoa powder.', [fe22, fda]),
   ('The only origin data, from one Peruvian survey, put regional bean means between about 3.5 and 9.3 mg/kg, read from a figure and without detection limits, which is too weak to rank origins for nickel.', [are])),
],
'processing': [
 P(('Processing redistributes metals between fractions rather than removing them.', [oli]),
   ('In the Bahia pilot run, about 59% of the cadmium stayed in the mill residue, 35% went to the liquor and 6% to the shell, and pressing sent all of the liquor’s cadmium into the cake and none into the butter.', [oli]),
   ('That is why cocoa powder, the defatted solids, is the most concentrated retail form, while cocoa butter is low.', [oli, j91])),
 P(('For lead, cleaning and shelling are the steps with measured effects.', [ays]),
   ('Mechanical cleaning lowered whole-bean lead from 95.2 to 39.7 µg/kg, and adding a detergent and acid wash lowered it to 23.2 µg/kg.', [ays]),
   ('After winnowing, the fine nib fractions carried up to 143 µg/kg lead against about 15–20 µg/kg in the coarse fractions, so screening out fines is a further lever.', [ays])),
 P(('Fermentation has only small tested effects on cadmium.', []),
   ('Adding Rhizobium japonicum to the fermenting mass lowered Trinitario bean cadmium from 0.36 to 0.29–0.30 mg/kg but barely changed Nacional beans (0.34–0.35 mg/kg).', [cha]),
   ('A review notes that cadmium can move from nib to shell when fermentation drives nib pH below 5, which is a mechanism rather than a validated control.', [abt20])),
],
'controls': [
 P(('Controls for cocoa act at the farm, during post-harvest handling, in the factory and at lot acceptance.', [cxc]),
   ('The Codex code of practice recommends soil testing, liming toward pH 6 or above (for example 3 t/ha/year of dolomite), avoiding cadmium-rich fertilisers, applying zinc and using low-cadmium planting material, but it reports no measured effect sizes.', [cxc])),
 P(('The field evidence for cadmium is limited but measurable.', []),
   ('In a Peruvian field trial, arbuscular mycorrhizal fungi lowered bean cadmium from 0.94 to 0.56 mg/kg, while biochar at 1–2% had smaller effects.', [veg]),
   ('In a greenhouse trial, quinoa biochar at 2% cut seedling leaf cadmium by 15–54% depending on soil, but beans were not measured.', [lop]),
   ('Compost changed soil cadmium fractions in Ecuador, but the bean results were not printed.', [gut])),
 P(('Lead controls are about cleanliness after harvest: drying beans off the ground, cleaning, removing shells and dust, and keeping equipment free of lead.', [ays, cxc]),
   ('Testing detects contamination and supports exclusion or blending, but it does not remove metals.', [j91, met])),
],
'tradeoffs': [
 P(('Switching origin to reduce cadmium can leave lead unchanged or higher.', []),
   ('West African beans had the lowest cadmium medians but lead medians of about 25 µg/kg, while Ecuadorian and Peruvian beans were higher in cadmium and lower in lead in the same industry testing.', [ays])),
 P(('Soil amendments are not uniformly effective.', []),
   ('A review found that gypsum, or lime with compost, lowered leaf cadmium but not bean cadmium in some trials, and that some liming materials increased uptake.', [gar]),
   ('Biochar effects were not statistically significant in every soil tested.', [lop])),
 P(('Blending dilutes a high-cadmium lot rather than removing cadmium, and a lower-cocoa recipe lowers cadmium per gram of chocolate but not per gram of cocoa.', [met, kat]),
   ('Organic certification is not a cadmium control: certified-organic products measured higher in the US analysis.', [han])),
],
'testing': [
 P(('A useful cocoa test states the form, the basis and the cocoa-solids content, because the EU and Codex limits are set by cocoa-solids class.', [eu, cxs]),
   ('Beans are usually reported on a dry-weight basis and products as sold; Singapore’s cocoa-powder limits are even set on a dry, fat-free basis.', [are, sfa])),
 P(('Detection limits must sit well below the relevant limit.', []),
   ('FDA’s reporting limits were 3 µg/kg for cadmium and 10 µg/kg for lead in cocoa powder, while some monitoring submissions used limits of 40 µg/kg or more for cadmium in powder, which hides much of the lower range.', [fda, gems]),
   ('Several surveys reported no detection limit, reference material or recovery check, and two were held here because their values could not be reconciled with their own methods.', [amj, eno])),
 P(('Arsenic and mercury in cocoa are reported almost entirely as totals.', [gems, ear]),
   ('Inorganic arsenic in European monitoring of chocolate and cocoa powder was mostly below about 20 µg/kg, and no source measured methylmercury or hexavalent chromium in cocoa.', [gems])),
],
'procurement': [
 P(('Ask for lot-specific cadmium results with the cocoa-solids content, and compare them with the limit for the destination market.', [eu, cxs]),
   ('The EU sets cadmium at 0.10 mg/kg for milk chocolate under 30% cocoa solids, 0.30 mg/kg for chocolate under 50%, 0.80 mg/kg for chocolate at 50% or more and 0.60 mg/kg for consumer cocoa powder.', [eu]),
   ('Codex and Hong Kong set 0.3, 0.7, 0.8 and 0.9 mg/kg across the same cocoa-content bands and 2.0 mg/kg for cocoa powder, and Australia and New Zealand set 0.5 mg/kg for chocolate and cocoa products.', [cxs, hk, fsc])),
 P(('Other markets also limit lead and arsenic.', []),
   ('MERCOSUR sets lead at 0.2–0.5 mg/kg and arsenic at 0.2–0.5 mg/kg for cocoa paste and chocolates, China sets lead and total arsenic at 0.5 mg/kg for cocoa products and chocolate, and the EU has applied nickel limits of 2.5–15 mg/kg since July 2025.', [mer, cn, euni])),
 P(('For cadmium, record the bean origin and request bean-lot results, since origin is the strongest predictor but varies within countries.', [ays, are]),
   ('Buyers have used bean acceptance thresholds of about 0.5–1.1 mg/kg to meet the chocolate limits.', [met]),
   ('For lead, specify cleaning, shell and dust removal and request finished-lot results, because lead depends on handling rather than origin.', [ays])),
],
'product': [
 P(('Cocoa is a modest but real source of dietary cadmium.', [e12, j91]),
   ('EFSA found that chocolate products supplied 4.3% of cadmium exposure across European age groups, and close to 10% for school-age children when cocoa beans and products are added.', [e12]),
   ('JECFA put cocoa products at 0.1–9.4% of cadmium exposure across national and regional diets and concluded they are not a major contributor; applying the Codex limits lowered total exposure by 0.7% on average.', [j91])),
 P(('Chocolate matters more for nickel.', []),
   ('EFSA found that sugar and confectionery, driven mainly by chocolate, supplied up to 31% of adolescents’ nickel exposure, and cocoa beverages, with soft drinks, were the main beverage contributors for toddlers.', [eni20])),
 P(('Concentration is not intake: a small serving of dark chocolate can add more cadmium than a larger serving of milk chocolate.', [abt, kat]),
   ('Australian milk chocolate averaged 15 µg/kg cadmium and 6 µg/kg lead in the 25th total diet study, near the low end of retail chocolate.', [fs19])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to cocoa or mentions cocoa, cacao or chocolate, plus every matching row in WHO GEMS/Food, the FDA Total Diet Study and other indexed datasets, each with a recorded decision based on its content.', []),
   ('Two retail surveys are held in full and individual values from several others are held because they could not be reconciled with their own methods or figures.', [amj, eno, rom])),
 P(('The remaining gaps are mostly unpublished data.', []),
   ('Per-farm bean results behind the Ecuadorian compost trial and the Peruvian national map, per-product values behind the multi-year US analysis, and EFSA’s 2020 nickel annex were not available in the library.', [gut, tho, han, eni20])),
],
}

headings = {'summary': 'Cocoa overview', 'identity': 'What counts as cocoa', 'occurrence': 'Heavy metal contamination profile of cocoa',
 'pathways': 'How metals reach cocoa', 'variation': 'Which origins and products measured lower', 'processing': 'Processing, fermentation and shelling',
 'controls': 'Mitigation from farm to factory', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing cocoa for metals',
 'procurement': 'Buying and verifying cocoa', 'product': 'Exposure from cocoa and chocolate', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Seeds of Theobroma cacao and their fractions: beans, nibs, liquor, butter, powder and chocolate.', cxc, oli),
             A('Fractions differ: cadmium follows nonfat cocoa solids; butter is low; shells carry lead.', oli, ays),
             A('Bean results (dry weight) and product results (as sold) are not transferred between forms.', are, abt)],
'summary': [A('Cadmium is the decision metal, rising with cocoa content; lead is lower and handling-driven.', abt, kat, ays),
            A('Origin is the strongest supported cadmium lever; West African beans measured lowest.', ays, j91),
            A('Lot cadmium results with cocoa-solids content, and cleaning/shelling for lead, are the supported buyer controls.', eu, ays)],
'occurrence': [A('Cd, Pb, Ni, total As, Hg, Cr, Al, Sn and U are reported; species beyond inorganic arsenic were not measured.', gems, eni15, fe22),
               A('Form-specific pooled references use GEMS/Food, FDA, individual products and published subgroup medians.', gems, abt, kat),
               A('Non-detects are bounded intervals; held values are shown with reasons and not compared.', amj, eno)],
'pathways': [A('Cadmium: root uptake governed by total soil Cd and pH; nib Cd arrives via branches.', wad, blo, ram),
             A('Lead: post-harvest surface contamination; shells, dust and winnowing contact.', ays, abt20),
             A('Soil-to-bean transfer is modelled or observational; no single soil test replaces a bean result.', wad, ram)],
'variation': [A('Cd lowest in West African beans and powder; highest in South/Central American origins.', ays, j91, abt),
              A('Large within-country and genotype differences (Peru, Ecuador, Brazil).', are, rom, oli),
              A('Pb does not follow Cd; milk and white chocolate lowest for both; organic not lower.', ays, oli, abt, han)],
'processing': [A('Pressing concentrates Cd in powder; butter remains low.', oli),
               A('Cleaning lowered bean Pb from 95.2 to 23.2–39.7 µg/kg; fines carry more Pb.', ays),
               A('Fermentation additives had small, variety-dependent Cd effects.', cha, abt20)],
'controls': [A('Codex code of practice: liming, low-Cd material, fertiliser choice, blending; no effect sizes.', cxc),
             A('Mycorrhizal fungi lowered bean Cd 0.94 to 0.56 mg/kg in one field trial.', veg, lop),
             A('Lead controls are post-harvest hygiene and shell/dust removal; testing does not remove metals.', ays, j91)],
'tradeoffs': [A('Low-Cd origins are not low-Pb origins.', ays),
              A('Soil amendments can lower leaf but not bean Cd; some liming increased uptake.', gar, lop),
              A('Blending dilutes; lower cocoa content lowers Cd per gram of product only; organic is not lower.', met, kat, han)],
'testing': [A('State form, basis and cocoa-solids content; limits are set by cocoa-solids class.', eu, cxs, sfa),
            A('Reporting limits ranged from 3 µg/kg (FDA) to 40 µg/kg or more for Cd; some surveys lacked QC.', fda, gems, amj),
            A('Arsenic and mercury are totals; inorganic arsenic mostly below about 20 µg/kg.', gems, ear)],
'procurement': [A('Compare lot Cd with EU 0.10–0.80 (chocolate) / 0.60 (powder) or Codex 0.3–0.9 / 2.0 mg/kg.', eu, cxs, hk, fsc),
                A('Lead and arsenic limits in MERCOSUR and China; EU nickel limits from July 2025.', mer, cn, euni),
                A('Record bean origin and request bean-lot Cd; specify cleaning for Pb.', ays, met)],
'product': [A('Chocolate supplied 4.3% of European Cd exposure; about 10% for school-age children.', e12),
            A('Cocoa 0.1–9.4% of Cd exposure internationally; not a major contributor.', j91),
            A('Chocolate drives up to 31% of adolescent nickel exposure.', eni20)],
'assessment': [A('All library records and dataset rows naming cocoa dispositioned on content.', gems, fda),
               A('Held: Amjad 2021, Enogbe 2025 and individually flagged values.', amj, eno, rom),
               A('Gaps: unpublished farm and product data, EFSA nickel annex.', gut, tho, han, eni20)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Which cocoa origins measured lowest in cadmium?',
  P(('Beans from Nigeria, Côte d’Ivoire, Ghana and Cameroon had median cadmium of 55–90 µg/kg in industry testing, and Brazilian beans 94 µg/kg.', [ays]),
    ('Within Brazil, Bahia beans averaged 60 µg/kg, and within Peru, Cuzco beans averaged 0.17 mg/kg.', [oli, are]),
    ('These are observed values for one metal; they do not make those origins lower in lead.', [ays]))),
 ('Which chocolate types have the least cadmium?',
  P(('Milk chocolate and white chocolate, because cadmium follows the nonfat cocoa solids.', [abt, kat]),
    ('In Japan, milk chocolate had a median of 23 µg/kg and dark chocolate 150 µg/kg, and white chocolate was near the detection limit.', [kat]))),
],
'processing': [
 ('Does cocoa butter contain heavy metals?',
  P(('Very little cadmium: in the Brazilian pilot run, butter was below 1.5 µg/kg while the powder from the same batch held 111 µg/kg.', [oli]),
    ('International data put the global median for cocoa butter at 20 µg/kg cadmium.', [j91]))),
],
'testing': [
 ('Why do some surveys report very high metals in chocolate?',
  P(('Some very high values come from products that are mostly not cocoa or from methods that cannot support them.', []),
    ('A Lahore survey converted digest results with inconsistent factors and included many compound confections without cocoa, and an Abuja survey reported chromium 30–40 times the limit it cited while concluding compliance.', [amj, eno]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in cocoa and chocolate?',
  P(('Cadmium is the metal found at levels that matter most, followed by lead; cocoa is also high in nickel and aluminium.', [abt, eni15, fe19]),
    ('Arsenic and mercury are usually low or below detection.', [gems, fda])), 'Abt Tables 3–4; EFSA 2015 nickel occurrence; Fechner 2019 Table 3; GEMS/Food'),
 ('ING-FAQ-02', 'How do heavy metals get into cocoa?',
  P(('Cadmium is taken up from the soil by the roots and is highest where soils are rich in cadmium and acidic.', [wad, tho]),
    ('Lead mostly settles on the bean shell from soil and dust after harvest.', [ays])), 'Wade Fig. 4–6; Thomas results; As You Sow factory study'),
 ('ING-FAQ-03', 'Is organic chocolate lower in heavy metals?',
  P(('Not in the available evidence: in a multi-year US analysis, certified-organic products averaged about 400 µg/kg more cadmium and 20 µg/kg more lead.', [han]),
    ('A German organic milk chocolate pool also had more cadmium than the conventional pool (56 against 16 µg/kg), though that is one pool each.', [fe22])), 'Hands regression table; Fechner 2022 Table S4'),
 ('ING-FAQ-04', 'Which types of chocolate have the lowest levels?',
  P(('Milk and white chocolate, because they contain the least cocoa solids.', [abt, kat]),
    ('In the US survey, milk chocolate averaged 60 µg/kg cadmium against 270 µg/kg in dark chocolate and 700 µg/kg in cocoa powder.', [abt])), 'Abt Tables 3–4; Kataoka Table 3'),
 ('ING-FAQ-05', 'Which growing regions produce cocoa with the lowest cadmium?',
  P(('West African beans measured lowest, with medians of 55–90 µg/kg for Nigeria, Côte d’Ivoire, Ghana and Cameroon, against 511–892 µg/kg for Ecuador, Peru and Venezuela.', [ays]),
    ('Ranges within countries are wide, and these origins are not lower in lead.', [are, ays])), 'As You Sow origin tables; Arévalo-Gardini Fig. 2'),
 ('ING-FAQ-06', 'Is cocoa powder higher in metals than chocolate?',
  P(('Yes: cocoa powder is the most concentrated retail form because it is defatted cocoa solids.', [oli]),
    ('US cocoa powder averaged 700 µg/kg cadmium and 110 µg/kg lead, against 270 and 30 µg/kg in dark chocolate.', [abt])), 'Oliveira processing section; Abt Tables 3–4'),
 ('ING-FAQ-07', 'What do the levels in chocolate mean for health?',
  P(('Chocolate is a modest source of dietary cadmium, supplying about 4% of European exposure and close to 10% for school-age children.', [e12]),
    ('JECFA concluded cocoa products are not a major contributor to cadmium exposure, but they matter more for nickel in children and adolescents.', [j91, eni20])), 'EFSA 2012 abstract and Tables 15–17; JECFA 91 summary; EFSA 2020 section 3.3'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in chocolate?',
  P(('Yes: the EU limits cadmium at 0.10–0.80 mg/kg in chocolate by cocoa content and 0.60 mg/kg in cocoa powder, and has limited nickel since July 2025.', [eu, euni]),
    ('Codex sets cadmium at 0.3–0.9 mg/kg for chocolate and 2.0 mg/kg for cocoa powder, and MERCOSUR and China also limit lead.', [cxs, mer, cn])), 'EU 2023/915 entry 3.2.15; EU 2024/1987; CXS 193; GMC 12/11; GB 2762'),
 ('ING-FAQ-09', 'Can processing reduce heavy metals in cocoa?',
  P(('Cleaning and shelling lower lead: cleaning cut whole-bean lead from 95.2 to 23.2–39.7 µg/kg in one factory study.', [ays]),
    ('Processing does not remove cadmium; it moves it into the cocoa solids, so powder ends up more concentrated than liquor.', [oli])), 'As You Sow factory study; Oliveira processing section'),
 ('ING-FAQ-13', 'How much does chocolate add to children’s exposure?',
  P(('For European school-age children, chocolate and cocoa products together supplied close to 10% of cadmium exposure.', [e12]),
    ('Chocolate also drove up to 31% of adolescents’ nickel exposure.', [eni20])), 'EFSA 2012 Table 16; EFSA 2020 section 3.3.1.1'),
 ('COCOA-FAQ-01', 'Why does dark chocolate have more cadmium than milk chocolate?',
  P(('Cadmium sits in the nonfat cocoa solids, so it rises with cocoa content.', [oli]),
    ('In Japan, the median rose from 23 µg/kg below 50% cocoa to 250 µg/kg at 80% or more.', [kat])), 'Oliveira processing; Kataoka Table 5'),
 ('COCOA-FAQ-02', 'Is the lead in chocolate from the soil?',
  P(('Mostly not: lead is concentrated on the shell and in dust, and one investigation attributed about 70% of nib lead to contact during bean breaking and winnowing.', [ays]),
    ('Industry shell lead had a median of 341 µg/kg against 1.2 µg/kg in nibs.', [ays])), 'As You Sow nib and shell tables; factory study'),
 ('COCOA-FAQ-03', 'Has lead or cadmium in chocolate been falling?',
  P(('In a US analysis of products bought in 2014–2022, lead was lower in the 2019 and 2022 cohorts than in 2014, and cadmium was lower in 2022.', [han]),
    ('The cohorts were different products chosen by popularity, so this is not a market-wide trend.', [han])), 'Hands Table 1 and cohort contrasts'),
 ('COCOA-FAQ-04', 'Does cocoa contain nickel?',
  P(('Yes, at levels high for food: about 9,500 µg/kg in cocoa beans and products and 3,800 µg/kg in chocolate in European monitoring.', [eni15]),
    ('The EU has limited nickel since July 2025 at 2.5–7.0 mg/kg in chocolate and 15 mg/kg in cocoa powder.', [euni])), 'EFSA 2015 occurrence table; EU 2024/1987'),
 ('COCOA-FAQ-05', 'Does cocoa contain arsenic or mercury?',
  P(('Usually little: FDA cocoa powder held 29 µg/kg total arsenic and 15 µg/kg mercury, and most European inorganic-arsenic results were below about 20 µg/kg.', [fda, gems]),
    ('A US analysis reported a median of 50 µg/kg total arsenic in dark chocolate and cocoa products.', [han])), 'FDA food 910; GEMS/Food EURO; Hands Table 1'),
 ('COCOA-FAQ-06', 'Is bean-to-bar chocolate different?',
  P(('Not clearly: Brazilian bean-to-bar dark chocolates averaged 78 µg/kg cadmium and 13 µg/kg lead, and bean-to-bar milk chocolates 25 and 12 µg/kg, in the same range as the few conventional bars tested alongside them.', [bur]),
    ('Artisanal Colombian single-farm bars made from high-cadmium beans averaged 1,100 µg/kg cadmium.', [bra])), 'Burgon metals chapter tables; Bravo Table 4'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-cocoa-v1', 'family': 'ingredient', 'slug': 'cocoa', 'title': 'Cocoa', 'display_title': 'Cocoa', 'version': 1, 'date': '2026-10-22',
     'description': 'Cadmium, lead, nickel and other metals in cocoa beans, powder and chocolate: origins, cocoa content, processing, limits, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Cocoa FAQs', 'aliases': []},
     'scope': {'analytes': 'Cd, Pb, Ni, total As, inorganic As (monitoring only), total Hg, Cr, Al, Sn, U as reported; no methylmercury or Cr(VI) measured',
               'material_form': 'Cocoa beans and nibs, shells, liquor, butter, natural and alkalised powder, sweetened drinking powder, dark, milk and white chocolate; composite foods and skin-protectant cocoa butter excluded',
               'basis': 'Beans dry weight as reported; products as sold; µg/kg; no moisture or fat-free conversion',
               'geography_market': 'Growing origin, farm, processing country, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years as reported; unreported dates stay unknown', 'stage': 'Soil and farm, post-harvest, factory processing, formulation, procurement and lot release',
               'population_route': 'Dietary ingestion; total diet study and exposure-assessment shares', 'comparator_outcome': 'Form-specific pooled HMI references; same-study subgroup contrasts; measured and observational control comparisons'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to cocoa or naming cocoa, cacao or chocolate, plus matching rows in GEMS/Food, FDA TDS and other indexed datasets',
                'protocol_ref': 'data/evidence/contracts/cocoa/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/extraction/'],
                'screening_ref': 'data/evidence/contracts/cocoa/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search'],
                'unresolved_access': ['Gutiérrez 2022 bean results (on request)', 'Thomas 2023 farm data (not shared)', 'Hands 2024 per-product values (on request)', 'EFSA 2020 nickel Annex C']},
     'source_catalogue': {'topic': 'ingredients/cocoa'}, 'retain_history_only': True}

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

quick = P(('Cadmium is the metal to check in cocoa: it rises with cocoa content, is highest in cocoa powder and dark chocolate, and is lowest in beans from West Africa; lead comes mainly from handling after harvest.', [abt, kat, ays]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Cadmium decides most cocoa questions; lead, nickel and aluminium are also elevated, while arsenic and mercury are usually low.', [abt, eni15, gems]),
 ('Main drivers', 'Growing origin, soil cadmium and pH, and cocoa content for cadmium; shell, dust and handling for lead.', [ays, wad, kat]),
 ('Practical framing', 'Ask for lot cadmium results with the cocoa-solids content, and cleaning and shelling controls for lead.', [eu, ays])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-cocoa-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-10', 'status': 'covered', 'reason': 'Arsenic in cocoa is almost all reported as totals; COCOA-FAQ-05 and Testing explain the inorganic-arsenic monitoring results.'},
 {'id': 'ING-FAQ-11', 'status': 'covered', 'reason': 'Shell versus nib and powder versus butter fractions are answered in COCOA-FAQ-02, ING-FAQ-06 and the Processing section.'},
 {'id': 'ING-FAQ-12', 'status': 'deferred', 'reason': 'No matched metal comparison of cocoa with carob or other substitutes in the ledger.'},
 {'id': 'ING-FAQ-14', 'status': 'not_applicable', 'reason': 'Home cooking is not an assessed cocoa preparation for metals.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking does not apply to cocoa products.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative serving guidance for chocolate metals; no frequency is invented from concentrations.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for cocoa metals.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, locator, scale, audiences=('supplier', 'brand')):
    return {'id': f'cocoa-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/cocoa.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Cocoa', 'audiences': list(audiences),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset', 'modelled': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Effects on other metals, yield, flavour and cost not quantified unless stated.',
            'verification_summary': 'Confirm with lot-specific results on the same form and basis.', 'comparator': comparator,
            'source_design_kind': kind, 'design': {'observational': 'Observational comparison', 'measured': 'Measured comparison', 'modelled': 'Statistical model of compiled data'}.get(kind, 'Official or author guidance'),
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching the bean or product, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Not applicable unless stated.',
            'other_contaminants': 'Not assessed.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled intervention effect', 'next_action': 'Keep effect unquantified unless measured in beans or product.'}], 'review': {'record_ref': 'data/evidence/contracts/cocoa/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis='Cocoa beans', note='Source-reported values.'):
    # With both measurements present the direction is the measured one; labels carry the interpretation.
    if start is not None and end is not None: direction = 'higher' if end > start else 'lower' if end < start else 'same'
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': note}
import re as _re
def src_url(sid):
    t = (root / 'wiki/sources' / f'{sid}.md').read_text()
    fm = t.split('---')[1]
    m = _re.search(r'^doi:\s*"?([^"\n]+)"?', fm, _re.M)
    if m and m.group(1).strip() not in ('null', ''): return 'https://doi.org/' + m.group(1).strip()
    for k in ('url', 'access_url', 'source_url'):
        m = _re.search(rf'^{k}:\s*"?([^"\n]+)"?', fm, _re.M)
        if m and m.group(1).strip() not in ('null', ''): return m.group(1).strip()
    return f'../sources/{sid}'
controls = [
 control(1, cxc, 'Codex CXC 81-2022', src_url(cxc), 'soil remediation', 'Raise soil pH by liming where soils are acidic', 'guidance', 'Cocoa farm soils (code of practice)',
   'The code recommends liming toward pH 6 or above, for example 3 t/ha/year of dolomitic lime, and calls liming the most effective method found to date; no effect size is given.',
   'Guidance; no measured comparison in the code.',
   [out('Cd', 'context', None, None, 'Guidance; effect not measured', 'Bean cadmium', 'Limed versus unlimed acidic soils', 'Production section')],
   'Acidic cadmium-bearing soils.', 'No quantified effect in the code itself.', 'Production practices', 'Guidance'),
 control(2, wad, 'Wade et al. 2022', src_url(wad), 'soil remediation', 'Target soil pH and total soil cadmium when siting and managing farms', 'modelled', 'Compiled bean and soil data across the cacao belt',
   'In a model fitted to 892 compiled bean results, bean cadmium fell from about 1.65 to 1.0–1.1 mg/kg as soil pH rose from 5 to about 7; total soil cadmium and pH were the strongest predictors.',
   'Modelled bean cadmium at soil pH 5 versus about 7.',
   [out('Cd', 'lower', 1650, 1050, 'Lower modelled bean Cd at higher soil pH', 'Modelled bean cadmium (dry matter)', 'Soil pH 5 versus about 7', 'Fig. 6', note='Model prediction, not a field intervention.')],
   'Farms across Latin America and Africa represented in the compiled studies.', 'Model of observational data; not a liming trial.', 'Fig. 4–6', 'Compiled field data'),
 control(3, veg, 'Vega-Jara et al. 2025', src_url(veg), 'cultivation', 'Inoculate trees with arbuscular mycorrhizal fungi', 'measured', 'Cacao trees in a Peruvian field trial',
   'Arbuscular mycorrhizal fungi lowered mean bean cadmium from 0.94 to 0.56 mg/kg; Callisia repens, the combination, and biochar at 1–2% had smaller effects.',
   'Untreated control trees in the same plot.',
   [out('Cd', 'lower', 940, 560, 'Lower bean Cd with fungi', 'Mean bean cadmium', 'Fungi versus control', 'Results; Fig. 1A'),
    out('Cd', 'lower', 940, 810, 'Small reduction with 1% biochar (figure estimate)', 'Mean bean cadmium', 'Biochar 1% versus control', 'Fig. 1A', note='Read from the figure.')],
   'One site; 18 trees; one season.', 'Small trial; some figure readings; significance letters inconsistent with text.', 'Fig. 1A', 'Field plot'),
 control(4, lop, 'López et al. 2022', src_url(lop), 'soil remediation', 'Add biochar to cadmium-bearing soils', 'measured', 'Cacao seedlings in pot trials, three soils',
   'Quinoa biochar at 2% cut seedling leaf cadmium by 15–54% depending on soil and lowered readily soluble soil cadmium by 71–78%; beans were not measured.',
   'Same soils without biochar.',
   [out('Cd', 'lower', 13900, 6400, 'Lower leaf Cd (seedlings)', 'Leaf cadmium', 'Biochar 2% versus control, Cd-spiked soil', 'Table 2; Table S6', basis='Seedling leaves'),
    out('Cd', 'context', 2900, 1800, 'Not statistically significant', 'Leaf cadmium', 'Biochar 2% versus control, acidic soil', 'Table 2', basis='Seedling leaves')],
   'Greenhouse pots; young plants.', 'Leaf endpoint only; transfer to beans untested.', 'Table 2', 'Pot'),
 control(5, gut, 'Gutiérrez et al. 2022', src_url(gut), 'soil remediation', 'Apply compost to shift soil cadmium into bound forms', 'measured', 'Eight Ecuadorian cacao farms',
   'Compost changed the humic- and fulvic-acid-bound soil cadmium fractions; bean cadmium was measured but not printed by farm or treatment.',
   'Same farms without compost.',
   [out('Cd', 'context', None, None, 'Soil fractions changed; bean effect not reported', 'Soil cadmium fractions', 'Compost versus none', 'Tables 2–4', basis='Soil')],
   'Ecuadorian farms; one season.', 'No published bean outcome.', 'Tables 2–4', 'Farm'),
 control(6, are, 'Arévalo-Gardini et al. 2017', src_url(are), 'cultivation', 'Prefer low-cadmium genotypes where available', 'observational', 'Beans from 70 Peruvian plantations',
   'The native Chuncho type averaged 0.17 mg/kg bean cadmium against 0.90 mg/kg for CCN 51 and 1.80 mg/kg for spontaneous hybrids.',
   'Genotypes grown in different regions; not a common-garden trial.',
   [out('Cd', 'lower', 900, 170, 'Lower Cd in Chuncho (observational)', 'Mean bean cadmium (dry weight)', 'CCN 51 versus Chuncho', 'Fig. 3', note='Figure estimates; genotype confounded with region.')],
   'Peru, 2014.', 'Genotype and region confounded.', 'Fig. 3', 'Field survey'),
 control(7, cha, 'Chang et al. 2022', src_url(cha), 'harvest and collection', 'Add Rhizobium japonicum during fermentation', 'measured', 'Fermenting Trinitario and Nacional beans',
   'At 3–5% inoculum, Trinitario bean cadmium fell from 0.36 to 0.29–0.30 mg/kg; Nacional beans barely changed (0.34–0.35 mg/kg).',
   'Uninoculated fermentation of the same beans.',
   [out('Cd', 'lower', 360, 290, 'Small reduction (Trinitario)', 'Bean cadmium', '5% inoculum versus control', 'Table 16'),
    out('Cd', 'context', 360, 350, 'No meaningful change (Nacional)', 'Bean cadmium', '5% inoculum versus control', 'Table 16')],
   'One fermentation trial; two varieties.', 'No SD or significance test reported.', 'Table 16', 'Fermentation batch'),
 control(8, ays, 'As You Sow 2022', src_url(ays), 'food processing', 'Clean beans before breaking', 'measured', 'Côte d’Ivoire beans processed in North America',
   'Mechanical cleaning lowered whole-bean lead from 95.2 to 39.7 µg/kg, and a detergent and acid wash lowered it to 23.2 µg/kg; cleaner dust held 2,370–3,130 µg/kg.',
   'Received beans before cleaning.',
   [out('Pb', 'lower', 95.2, 39.7, 'Lower bean Pb after mechanical cleaning', 'Whole-bean lead', 'Cleaned versus received', 'Attachment 2, Appendix C'),
    out('Pb', 'lower', 95.2, 23.2, 'Lower bean Pb after detergent and acid wash', 'Whole-bean lead', 'Washed versus received', 'Attachment 2, Appendix C')],
   'One factory; one bean lot; August 2020.', 'Single factory study.', 'Attachment 2', 'Factory'),
 control(9, ays, 'As You Sow 2022', src_url(ays), 'food processing', 'Remove shells and nib fines thoroughly', 'measured', 'Beans and nib fractions',
   'Separated shells held 163 µg/kg lead against 15.2 µg/kg in nibs; after winnowing, the fine nib fraction carried up to 143 µg/kg against about 15–20 µg/kg in coarse fractions.',
   'Shell versus nib, and fine versus coarse nib fractions.',
   [out('Pb', 'lower', 163, 15.2, 'Lower Pb in nib than shell', 'Lead by fraction', 'Shell versus nib', 'Attachment 2, Appendix C'),
    out('Pb', 'lower', 143, 17.5, 'Lower Pb in coarse nib fractions', 'Nib lead by particle size', 'Fines versus coarse', 'Attachment 2, Appendix C')],
   'One factory study.', 'Single study.', 'Attachment 2', 'Factory'),
 control(10, oli, 'Ferreira de Oliveira et al. 2021', src_url(oli), 'food processing', 'Recognise that pressing concentrates cadmium in powder', 'measured', 'One Bahia bean batch processed at pilot scale',
   'Pressing sent all liquor cadmium into the cake; cocoa butter was below 1.5 µg/kg while powder held 111 µg/kg against 60 µg/kg in liquor.',
   'Liquor versus its butter and powder fractions.',
   [out('Cd', 'context', 60, 111, 'Cd concentrates in powder', 'Cadmium by fraction', 'Liquor versus powder', 'Processing section', basis='Cocoa products')],
   'One pilot batch.', 'Single batch; mass balance only.', 'Processing section', 'Pilot plant'),
 control(11, ays, 'As You Sow 2022', src_url(ays), 'sourcing and procurement', 'Source low-cadmium origins and verify bean lots', 'observational', 'Industry bean testing by growing origin',
   'Median bean cadmium was 55–94 µg/kg for Nigeria, Côte d’Ivoire, Ghana, Cameroon and Brazil, against 511–892 µg/kg for Ecuador, Peru and Venezuela; lead medians did not follow the same order.',
   'Bean origins tested by the same companies.',
   [out('Cd', 'lower', 511, 60, 'Lower Cd in West African beans (observational)', 'Median bean cadmium', 'Ecuador versus Côte d’Ivoire', 'Attachment 1 origin tables'),
    out('Pb', 'context', 10, 25, 'Pb not lower in West African beans', 'Median bean lead', 'Ecuador versus Côte d’Ivoire', 'Attachment 1 origin tables')],
   'Industry testing, 2015–2019.', 'Blinded industry data without QA details.', 'Attachment 1', 'Industry dataset'),
 control(12, kat, 'Kataoka et al. 2018', src_url(kat), 'product formulation', 'Choose cocoa content with its cadmium implication in view', 'observational', '140 chocolates sold in Japan',
   'Median cadmium rose from 23 µg/kg in chocolate under 50% cocoa to 120, 190 and 250 µg/kg in successive higher-cocoa groups.',
   'Cocoa-content groups in one retail survey.',
   [out('Cd', 'lower', 250, 23, 'Lower Cd at lower cocoa content', 'Median chocolate cadmium', '≥80% versus <50% cocoa', 'Table 5', basis='Chocolate as sold')],
   'Japan, 2015–2016.', 'Lowers cadmium per gram of product, not per gram of cocoa.', 'Table 5', 'Retail survey', audiences=('supplier', 'brand', 'consumer')),
 control(13, j91, 'JECFA 2022', src_url(j91), 'lot acceptance and release', 'Enforce the Codex cocoa cadmium limits at lot release', 'modelled', 'Cocoa products in international diets',
   'Applying the Codex limits lowered cocoa’s average share of cadmium exposure from 2.2% to 1.5% and total cadmium exposure by 0.7% on average (up to 2.4%).',
   'Exposure with and without the limits applied to occurrence data.',
   [out('Cd', 'context', None, None, 'Total exposure 0.7% lower on average', 'Cocoa share of dietary cadmium', 'With versus without limits', 'Table 7', basis='Dietary exposure')],
   'Global cluster diets.', 'Modelled; testing detects and excludes, it does not remove cadmium.', 'Table 7', 'Exposure model'),
 control(14, han, 'Hands et al. 2024', src_url(han), 'sourcing and procurement', 'Do not rely on organic certification to lower cadmium', 'observational', '72 US dark chocolate and cocoa products',
   'Certified-organic products averaged about 401 µg/kg more cadmium and 20 µg/kg more lead than non-organic products.',
   'Organic versus non-organic products in the same analysis.',
   [out('Cd', 'context', None, None, 'Higher Cd in organic products', 'Product cadmium', 'Organic versus non-organic', 'Regression table', basis='Products as sold')],
   'US market, 2014–2022.', 'Observational; product mix not controlled.', 'Regression table', 'Retail survey', audiences=('supplier', 'brand', 'consumer')),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls), 'occurrence sources', n_sources)
