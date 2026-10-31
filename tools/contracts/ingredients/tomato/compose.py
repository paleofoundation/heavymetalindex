"""Compose the tomato synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction
records in data/evidence/contracts/ingredient-rollout-2026-10-22/tomato/extraction/
and, for WHO GEMS/Food, to primary/gemsfood-tomato-records.csv (HMI-calculated
counts and medians on fresh-weight records; non-detects bounded, never zero).
check-figures.py recomputes every dataset figure quoted here.
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/tomato'

gems = 'who-gemsfood-heavy-metal-contaminants'; fda = 'fda2022-tds-elements-fy2018-fy2020'
eu = 'eu-2023-915-contaminants-maximum-levels'; cx = 'codex-cxs-193-1995'
gro = 'grochowska-niedworok2020-cadmium-lead-tomatoes-poland'; rus = 'rusin2021-vegetables-fruits-cadmium-lead-poland'; hes = 'heshmati2020-iran-vegetables-cereals-pb-cd'
abd = 'abdolahpour2023-heavy-metals-babol-vegetables'; ali = 'alimohammadi2018-tehran-supermarket-vegetables'; vel = 'vela2023-quito-vegetables-cd-pb'
ahm = 'ahmed2023-trace-metals-tomato-wastewater'; sal = 'salem2024-tomato-remediated-soil-egypt'; cla = 'clair-caliot2021-arsenic-irrigated-vegetables-burkina'
fat = 'fatai2024-african-spinach-tomato-nigeria'; baz = 'bazie2022-burkina-faso-foodstuffs-metals'; sam = 'samma2024-bangladesh-vegetable-metals'
jos = 'joseph2025-gobbiya-dam-vegetable-metals'; che = 'chen2024-shanghai-hydroponic-vegetables'; sle = 'saleem2025-nd-vegetables-hra'
rod = 'rodriguez-rodriguez2026-sargassum-biofertilizer-tomato-trace-elements'; san = 'authors2023-determination-of-heavy-metals-concentrations-in-soil-and'
lu = 'authors2015-reclaimed-water-through-field-trials-on-the-content'; bor = 'bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing'
lou = 'loutfy2012-ismailia-foodstuffs-metals'; ame = 'ametepey2018-ghana-vegetables-heavy-metals'; moh = 'mohod2015-spinach-tomato-metals'
jai = 'jaishree2015-effluent-irrigated-crops-metals'; li = 'li2017-mercury-coal-power-plants-vegetables-grains'; slh = 'salhotra2017-vegetables-fruits-heavy-metals'
ros = 'rossini-oliva2024-urban-garden-vegetables-spain'; elb = 'elbagermi2012-misurata-fruits-vegetables-metals'; chf = 'cherfi2014-algeria-fruits-vegetables-metals'
gur = 'authors2025-detection-of-heavy-metals-concentration-in-vegetables-and'; naw = 'authors2017-levels-dietary-intake-and-health-risk-of-potentially'
hua = 'huang2014-zhejiang-vegetables-heavy-metals'; hob = 'hobbie2014-stainless-steel-ni-cr-leaching'; bas = 'bassioni2012-aluminum-foil-meat-cooking-uae'
dor = 'dordevic2019-aluminum-foil-culinary-baking-czech'; amm = 'ammar2023-element-migration-aluminum-cookware'; ecr = 'efsa-chromium-contam-2014'
hk = 'cfs2012-hktds-inorganic-arsenic'; can = 'cantoral2024-cadmium-foodstuffs-mexico'; bed = 'bedoya-perales2023-moquegua-peru-mining-dataset'
alt = 'altunay2023-cadmium-food-turkey'; eld = 'el-daouk2020-aluminum-food-lebanon'; bfr = 'bfr2020-aluminium-faq-consumer-products'
fsz = 'fsanz2019-25th-australian-total-diet-study'; ni = 'eu-2024-1987-nickel-maximum-levels'; e14 = 'efsa2014-dietary-exposure-iAs'; buc = 'buculei2012-tin-iron-migration-canned-food-romania'; tra = 'trandafir2012-tin-canned-foods-icp-ms'

import subprocess
_counts = json.loads(subprocess.run(['node', '--input-type=module', '-e', "import {tomatoRows} from './tools/contracts/ingredients/tomato/source-adapter.mjs';const {rows}=tomatoRows('.');const src=new Set(rows.map(r=>r.source));console.log(JSON.stringify({sources:src.size,held:new Set(rows.filter(r=>r.hold).map(r=>r.source)).size}))"], cwd=root, capture_output=True, text=True, check=True).stdout)
N_SRC = _counts['sources'] - 2   # extracted studies and reports, excluding the two datasets
N_HELD = _counts['held']

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
 P(('Fresh tomato usually carries little lead or cadmium.', []),
   ('In 2,778 WHO GEMS/Food lead results for fresh tomato from 1998 to 2020, about two in three were below the laboratory’s detection limit, the median lay between 0 and 7.5 µg/kg, and 86 (3.1%) were above 50 µg/kg, the EU maximum for fruiting vegetables.', [gems, eu]),
   ('Cadmium was detected in half of 3,197 results, with a median between 0 and 5 µg/kg, and 137 (4.3%) were above the EU maximum of 20 µg/kg.', [gems, eu])),
 P(('United States market baskets were lower still.', []),
   ('In 27 FDA Total Diet Study samples of raw tomato bought from 2017 to 2020, cadmium was found in 24 at 1.0–7.6 µg/kg (median 3.3 µg/kg), while lead, total arsenic, mercury, nickel, chromium and uranium were below reporting limits of 1–50 µg/kg in every sample.', [fda]),
   ('Retail and market surveys on a fresh-weight basis in Poland, Iran, Egypt and Romania found mean lead of 7–241 µg/kg and mean cadmium of 3–27 µg/kg.', [rus, hes, ali, lou, bor, abd])),
 P(('The high values in the literature come from exposed growing sites, from studies reporting on a dry-weight basis, and from papers whose figures do not survive a check.', []),
   ('Tomatoes grown near two Chinese coal-fired power plants held 9.8–76 µg/kg mercury against 0.73 µg/kg in a grocery-store sample, and Cairo tomatoes irrigated with industrial wastewater held about two and a half times the nickel and chromium of Nile-irrigated fruit.', [li, ahm]),
   (f'A tomato is about 94% water, so a dry-weight result is roughly 17 times the fresh-weight concentration of the same fruit; this page keeps the two bases apart, and holds values from {N_HELD} papers that conflict with their own methods or tables.', [hes, elb, jai, gur])),
 P(('For a buyer, the supported priorities are the growing site and the irrigation water, and lot results on a fresh-weight basis with quantification limits well below the EU maxima of 50 µg/kg lead and 20 µg/kg cadmium.', [li, lu, ahm, eu]),
   ('Codex sets 50 µg/kg lead for fruiting vegetables in its 2025 edition, but its cadmium maximum for fruiting vegetables does not apply to tomatoes.', [cx])),
],
'identity': [
 P(('This page covers fresh tomato fruit (Solanum lycopersicum) of any type, including cherry, plum and grape tomatoes, raw or of unstated preparation.', [gems, gro, bor]),
   ('Canned tomatoes, paste, purée, sauce, ketchup, juice, soup, dried tomato and dishes that contain tomato have their own pages, and their values are not used here; tree tomato (tamarillo) is a different plant.', [gems, fda])),
 P(('Weight basis matters more for tomato than for most foods.', []),
   ('Fresh tomatoes were 94.0–94.3% water in the surveys that measured it, so a concentration per kilogram of dry matter is about 17 times the concentration per kilogram of fresh fruit.', [hes, elb]),
   ('Many surveys dry the samples before analysis and do not state which basis they report; those results are shown, but compared only within their own study, because they cannot be placed on either basis.', [baz, jos, naw])),
 P(('Place names need the same care.', []),
   ('A GEMS/Food region is the region that reported the result, and its domestic and imported labels are relative to a reporting country the export does not name, while most surveys report the market where the tomatoes were bought.', [gems, lou, vel]),
   ('Greenhouse, field and organic labels in the monitoring data are the submitters’ food names and were not verified.', [gems])),
],
'occurrence': [
 P((f'The table holds every fresh-tomato result extracted from {N_SRC} studies and reports and two monitoring datasets: one row for each statistic a source reports for a subgroup and metal, so a mean, a median and a range from the same samples appear as separate rows.', [gems, fda, bor, baz, ros]),
   ('Ratings place a mean, median or single result against pooled HMI tomato references on the same weight basis, built from WHO GEMS/Food subgroup medians, FDA market-basket samples and per-sample results printed by surveys in Poland, Ecuador and Algeria; non-detects remain intervals and are never read as zero.', [gems, fda, gro, vel, chf]),
   ('Experimental treatments are compared only with their own controls, results of unstated basis only within their own study, and rows that failed a check against their own paper stay visible with the reason and are not compared.', [cla, sal, baz, jai, ahm])),
],
'pathways': [
 P(('Most of what reaches tomato fruit reflects the growing site: soil, irrigation water and air.', []),
   ('In a four-year Chinese field trial, fruit irrigated with half reclaimed water held more cadmium (29 against 18 µg/kg) and chromium (61 against 49 µg/kg) than fruit irrigated with groundwater, although only the chromium difference approached statistical significance.', [lu]),
   ('In Cairo, fruit from farms irrigated with untreated industrial wastewater held 760 µg/kg chromium and 1,630 µg/kg nickel against 290 and 610 µg/kg on farms irrigated from the Nile; the same paper’s lead and cadmium values cannot be reconciled with its own soil data and are held.', [ahm])),
 P(('Air is the main route for mercury near large emitters.', []),
   ('Around a Chinese coal-fired power plant, tomato mercury fell from 76.3 µg/kg at the nearest site to 9.8 µg/kg at the farthest, and two sites near a second plant held 71.8 and 29.8 µg/kg, against 0.73 µg/kg in tomatoes from a grocery store.', [li])),
 P(('Experiments show the same dependence on water and soil.', []),
   ('Fruit arsenic rose to 0.18 and 0.43 µg/g dry weight when irrigation water was spiked to 500 and 1,000 µg/L arsenic in Burkina Faso, about 0.02 and 0.05 µg/g on a fresh-weight basis.', [cla]),
   ('In Egypt, fruit grown with agricultural drainage water held 1,000 µg/kg nickel in a greenhouse plot and 88 µg/kg in a field plot, and remediating the soil with clay minerals and treating the water lowered these to 250 and 18 µg/kg; cadmium was not detected in any treatment.', [sal]),
   ('In a Dominican greenhouse trial, lead, cadmium and arsenic stayed below 10 µg/kg in fruit whether the plants received mineral fertiliser, a seaweed-based biofertiliser or nothing.', [rod])),
],
'variation': [
 P(('For lead, the lowest results came from the United States and from Americas monitoring submissions.', []),
   ('All 27 FDA market-basket samples were below 4 µg/kg, and in GEMS/Food the detected lead results had a median of 2.1 µg/kg in the Americas, 4.3 µg/kg in the Western Pacific and 18 µg/kg in Europe, with 2.2%, 2.6% and 3.7% of results above 50 µg/kg.', [fda, gems]),
   ('Part of that difference is analytical: European lead results had a median detection limit of 8 µg/kg, often 10–50 µg/kg, against 1 µg/kg in the Americas, so this is a tentative pattern among reporting regions, not a sourcing preference for a country.', [gems])),
 P(('Growing-system labels did not separate lead in the monitoring data, but one controlled comparison did.', []),
   ('In Americas submissions from 2014 to 2016, greenhouse-labelled tomatoes had a detected lead median of 2.2 µg/kg (54 of 156 detected), organic-labelled 1.7 µg/kg (19 of 46) and unlabelled 2.0 µg/kg; only three of ten field-labelled results were detected, too few to compare.', [gems]),
   ('In Shanghai, hydroponically grown tomatoes held 5.6 µg/kg lead and cadmium combined against 47.9 µg/kg for soil-grown tomatoes from 20 and 22 farm samples, a significant difference; the paper does not give the two metals separately for tomato or state the weight basis.', [che])),
 P(('Type also mattered in one Romanian survey.', []),
   ('After washing in tap water, red cherry tomatoes from the market held 18.6 µg/kg lead and no detectable cadmium against 66.8 µg/kg lead and 16.5 µg/kg cadmium in standard tomatoes, while yellow cherry tomatoes held 51.3 µg/kg lead and 23.5 µg/kg cadmium.', [bor]),
   ('Total arsenic did not follow: it was 334 µg/kg in red cherry and 389 µg/kg in standard tomatoes, so the type lowest in lead was not lowest in arsenic.', [bor])),
 P(('For cadmium, fresh-weight means were lowest in Poland and western Iran and highest in Egypt and northern Iran.', []),
   ('Ten Polish tomatoes averaged 3 µg/kg and 50 composites from Hamadan 3 µg/kg, against 9–15 µg/kg in Tehran, 25.5 µg/kg in Ismailia and 27 µg/kg in Babol; the GEMS/Food detected medians were 5 µg/kg in Europe and 9–12 µg/kg in the Americas, Western Pacific and Eastern Mediterranean.', [rus, hes, ali, lou, abd, gems]),
   ('These are single surveys with different methods, so they describe the lowest observed means rather than reliably cleaner regions.', [])),
 P(('For arsenic and nickel, within-study comparisons point to water and site rather than to a country.', []),
   ('Total arsenic was below 3 µg/kg in every FDA sample and inorganic arsenic below 3 µg/kg in four Hong Kong total-diet composites, and EFSA put mean inorganic arsenic in 484 European tomato results at 1.5–7.7 µg/kg, mostly estimated from total arsenic; tap-washed Romanian tomatoes, by contrast, held 255–389 µg/kg total arsenic.', [fda, hk, e14, bor]),
   ('Nickel was below 40 µg/kg in every FDA sample and 161–232 µg/kg in Tehran, against an EU maximum of 400 µg/kg; in Seville urban gardens it ranged from 160 µg/kg dry weight in a peri-urban garden to 460 µg/kg in market tomatoes, the reverse of cadmium, which was highest in that peri-urban garden (228 against 73 µg/kg).', [fda, ali, ni, ros])),
],
'processing': [
 P(('Washing removes part of the metal measured on tomatoes, and an acidic soak removed more.', []),
   ('In Romania, soaking tap-washed market tomatoes in 5% vinegar lowered total arsenic from 389 to 202 µg/kg, cadmium from 16.5 to 12.2 µg/kg and lead from 66.8 to 54.0 µg/kg on a fresh-weight basis; a 10% soak gave similar results.', [bor]),
   ('The paper’s text reports larger reductions than its own tables, and there was no unwashed comparison, so the measured effect is the tables’ smaller one.', [bor])),
 P(('Cooking cannot destroy a metal, and cookware can add one.', []),
   ('Boiling Burkina Faso tomatoes in arsenic-free water did not lower arsenic per gram of dry matter in fruit from spiked irrigation: it was 0.43 µg/g before and 0.71 µg/g after.', [cla]),
   ('Baking fresh tomato in aluminium foil raised aluminium from 80 to as much as 370 µg/kg fresh weight, and simmering commercial tomato sauce with stainless steel for six hours raised nickel from about 0.15 to about 5–6 mg/kg, an effect that fell to about 0.7 mg/kg once the steel had been used for six cooking cycles.', [dor, hob])),
 P(('Canned and concentrated products are separate foods.', []),
   ('Studies of canned tomato products measured tin migrating from the can during storage, which fresh tomato does not carry; those results are on the canned tomato and tomato paste pages.', [buc, tra])),
],
'controls': [
 P(('Controls for tomato act mostly before harvest.', []),
   ('The measured comparisons concern irrigation water, distance from industrial emitters, soil remediation and growing system, with acidic washing, cookware choice and lot testing after harvest.', [lu, ahm, li, sal, che, bor, hob, dor]),
   ('Most are single studies or observational comparisons, so the table records their direction and size without implying they would transfer unchanged to another farm.', [])),
],
'tradeoffs': [
 P(('No single lever lowered every metal.', []),
   ('In Seville urban gardens, the peri-urban plot had the lowest chromium and nickel but the highest cadmium and, narrowly, lead, and among Romanian tomatoes the cherry type lowest in lead was not lowest in arsenic.', [ros, bor]),
   ('In the Egyptian trial, the greenhouse plot carried about ten times the fruit nickel of the field plot on a different soil, so “greenhouse” alone is not a lower-metal label.', [sal])),
 P(('Some post-harvest controls have their own costs.', []),
   ('A vinegar soak also changes the fruit, and the Romanian study did not measure quality; stainless steel’s nickel and chromium release fell with repeated use, so a new pan matters more than an old one; and more acidic or spiced tomato dishes leached more aluminium from foil.', [bor, hob, bas]),
   ('Hydroponic growing lowered lead and cadmium in one study, but its nutrient water itself carried lead (0.036 mg/L), and the authors recommend pollution-free water.', [che])),
],
'testing': [
 P(('A useful tomato test reports lead and cadmium on a fresh-weight basis, with quantification limits well below the 50 µg/kg and 20 µg/kg EU maxima.', [eu]),
   ('FDA reported lead and cadmium down to 4 and 1 µg/kg; in GEMS/Food the median European lead detection limit was 8 µg/kg, and eight non-detect records with limits of 1,000–3,000 µg/kg could not place a result at all.', [fda, gems])),
 P(('Most of the academic literature is less informative than its numbers suggest.', []),
   (f'Many papers report neither detection limits nor weight basis, several compare dry-weight results with fresh-weight limits, and {N_HELD} had values that conflict with their own methods, units or tables, including lead of 26 mg/kg in four different vegetables and a table with no unit at all.', [vel, elb, gur, jai, fat, ahm])),
 P(('Record the growing site, irrigation source, growing system and type with every result, and report non-detects with their limit.', [lu, li, che, bor]),
   ('Chromium results are total chromium; no source in the ledger measured hexavalent chromium or methylmercury in tomato.', [ecr, li])),
],
'procurement': [
 P(('Ask for lot-specific lead and cadmium results on a fresh-weight basis with the laboratory’s quantification limit, compared with the limit in the destination market.', [eu, cx]),
   ('The EU applies 50 µg/kg lead, 20 µg/kg cadmium and, from July 2025, 400 µg/kg nickel to fruiting vegetables on a fresh-weight basis after washing, and EFSA’s food classification places tomatoes among fruiting vegetables.', [eu, ni, e14]),
   ('Codex sets 50 µg/kg lead for fruiting vegetables and no cadmium maximum for tomatoes.', [cx])),
 P(('Ask where and how the tomatoes were grown, not only where they were packed.', []),
   ('The supported reasons are distance from coal-fired power plants for mercury, irrigation with wastewater or reclaimed water for chromium, nickel and cadmium, and arsenic in irrigation water.', [li, ahm, lu, cla]),
   ('Hydroponic production measured lower lead and cadmium in one study; greenhouse, field and organic labels did not separate lead in monitoring data.', [che, gems])),
],
'product': [
 P(('Tomato is eaten in large amounts, so even low concentrations matter for intake.', []),
   ('Adults ate 109 g of tomato a day in an Iranian survey and 75.6 g of fresh tomato a day in Lebanon, the second-highest intake of any food in that survey.', [hes, eld]),
   ('In Hamadan, tomato gave an estimated 0.011 µg/kg body weight a day of lead and 0.005 µg/kg of cadmium, and in Ismailia it supplied 16% of estimated cadmium intake and 9% of lead intake.', [hes, lou])),
 P(('National diet studies put tomato among the minor sources.', []),
   ('Australia’s 25th Total Diet Study found that tomatoes, eggplant and okra together supplied 2–3% of cadmium exposure, and no source in the ledger estimated tomato’s share of arsenic or mercury intake.', [fsz])),
],
'assessment': [
 P((f'Every record and dataset row that names tomato, or that discovery matched through the alias list, was decided on its content: {N_SRC} studies and reports and two datasets contribute fresh-tomato results.', [gems, fda]),
   (f'Values from {N_HELD} papers are held because they conflict with their own methods, units or tables, among them Cairo lead and cadmium, Indian effluent-irrigated values with no unit, Polish fresh-mass values above their own dry-mass results, and Ethiopian lead identical across four vegetables.', [ahm, jai, gro, gur]),
   ('Gaps remain: no source measured hexavalent chromium or methylmercury in tomato, Australia’s raw-tomato results sit in an appendix not in the library, and some surveys print their tomato values only in figures.', [ecr, fsz, hua])),
],
}

headings = {'summary': 'Tomato overview', 'identity': 'What counts as fresh tomato', 'occurrence': 'Heavy metal contamination profile of tomato',
 'pathways': 'How metals reach tomatoes', 'variation': 'Which tomatoes and growing conditions measured lower', 'processing': 'Washing, cooking and processed products',
 'controls': 'Mitigation from field to kitchen', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing tomatoes for metals',
 'procurement': 'Buying and verifying tomatoes', 'product': 'Exposure from tomato', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Fresh tomato fruit of any type, raw or of unstated preparation; canned, concentrated, sauce, juice, dried and mixed foods excluded.', gems, fda),
             A('Fresh-weight, dry-weight and unstated-basis results are kept apart; tomato is about 94% water.', hes, elb),
             A('GEMS/Food regions and surveys’ markets are not growing origins; system labels unverified.', gems, lou)],
'summary': [A('GEMS/Food: lead median 0–7.5 µg/kg, 3.1% above 50 µg/kg; cadmium median 0–5 µg/kg, 4.3% above 20 µg/kg.', gems, eu),
            A('FDA market baskets: cadmium median 3.3 µg/kg; all other metals below reporting limits.', fda),
            A('High literature values come from exposed sites, dry-weight reporting or values held for integrity conflicts.', li, ahm, jai)],
'occurrence': [A(f'Pb, Cd, total As, inorganic As, total Hg, Ni, Cr, Al, Sn and U reported from {N_SRC} studies and two datasets; no Cr(VI) or MeHg.', gems, fda),
               A('Pooled HMI tomato references on fresh and dry weight from GEMS/Food, FDA and per-sample survey results.', gems, fda, gro, vel),
               A('Non-detects bounded; experimental rows compared with own controls; held rows shown, not rated.', cla, jai)],
'pathways': [A('Irrigation with reclaimed or industrial wastewater raised cadmium, chromium and nickel in fruit.', lu, ahm),
             A('Mercury in fruit fell with distance from coal-fired power plants (76.3 to 9.8 µg/kg; control 0.73).', li),
             A('Arsenic-spiked irrigation raised fruit arsenic; soil remediation lowered fruit nickel.', cla, sal)],
'variation': [A('Lead lowest in US market baskets (<4 µg/kg) and Americas GEMS/Food submissions; regional pattern partly analytical.', fda, gems),
              A('Hydroponic tomatoes 5.6 against 47.9 µg/kg lead plus cadmium for soil-grown; system labels did not separate lead in GEMS/Food.', che, gems),
              A('Red cherry tomatoes lower in lead and cadmium than standard tomatoes but similar in arsenic in one survey.', bor)],
'processing': [A('A 5% vinegar soak lowered arsenic, cadmium and lead relative to tap-water washing.', bor),
               A('Boiling did not lower arsenic per dry gram; foil baking raised aluminium; stainless steel raised nickel and chromium in tomato sauce.', cla, dor, hob),
               A('Canned and concentrated tomato products carry can-derived tin and are covered on their own pages.', buc, tra)],
'controls': [A('Choose irrigation water free of wastewater and arsenic; site away from coal-fired power plants.', lu, ahm, cla, li),
             A('Soil remediation and hydroponic production lowered fruit nickel and lead plus cadmium in single studies.', sal, che),
             A('After harvest: acidic soak, avoid new stainless steel and aluminium foil for acidic tomato dishes, test lots.', bor, hob, dor, eu)],
'tradeoffs': [A('Sites and types lowest in one metal were not lowest in others.', ros, bor),
              A('A greenhouse plot held ten times the fruit nickel of a field plot on different soil.', sal),
              A('Stainless-steel release falls with repeated use; acidic and salty dishes leach more aluminium from foil.', hob, bas)],
'testing': [A('Report fresh-weight lead and cadmium with quantification limits well below 50 and 20 µg/kg.', eu, fda),
            A(f'Many papers omit detection limits and basis; {N_HELD} held for internal conflicts.', vel, gur, jai),
            A('Chromium is total chromium; no hexavalent chromium or methylmercury measured in tomato.', ecr, li)],
'procurement': [A('Request lot lead and cadmium results with LOQ against the destination-market limit.', eu, cx),
                A('Record growing site, irrigation source and growing system separately from packing or purchase market.', li, lu, che),
                A('EU 50 µg/kg lead, 20 µg/kg cadmium and 400 µg/kg nickel for fruiting vegetables; Codex 50 µg/kg lead, no cadmium maximum for tomatoes.', eu, ni, cx)],
'product': [A('Tomato intake 109 g/day in Iran and 75.6 g/day in Lebanon.', hes, eld),
            A('Tomato supplied 16% of cadmium and 9% of lead intake in Ismailia; Hamadan EDI 0.011 and 0.005 µg/kg bw/day.', lou, hes),
            A('Tomatoes, eggplant and okra together 2–3% of Australian cadmium exposure.', fsz)],
'assessment': [A(f'Every tomato-naming or alias-matched record and dataset row dispositioned on content; {N_SRC} studies plus two datasets extracted.', gems, fda),
               A(f'Held values from {N_HELD} papers that conflict with their own methods, units or tables.', ahm, jai, gro, gur),
               A('Gaps: no Cr(VI) or MeHg data; Australian raw-tomato appendix not in the library; figure-only surveys.', ecr, fsz, hua)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Are greenhouse or organic tomatoes lower in lead?',
  P(('Not clearly in the monitoring data: Americas submissions labelled greenhouse or organic had detected lead medians of 2.2 and 1.7 µg/kg against 2.0 µg/kg for unlabelled tomatoes.', [gems]),
    ('The one controlled comparison of growing systems found hydroponic tomatoes far lower in lead and cadmium combined than soil-grown tomatoes, 5.6 against 47.9 µg/kg.', [che]))),
 ('Which places measured the lowest cadmium in fresh tomatoes?',
  P(('On a fresh-weight basis, the lowest means were 3 µg/kg in Poland and in Hamadan, Iran, and the FDA median was 3.3 µg/kg; Tehran, Ismailia and Babol were higher at 9–27 µg/kg.', [rus, hes, fda, ali, lou, abd]),
    ('Each figure comes from one survey, so these are lowest observed values, not a ranking of countries.', []))),
],
'testing': [
 ('Why do some studies report very high metals in tomatoes?',
  P(('Some reflect dry-weight reporting, which multiplies a fresh concentration by about 17, and some reflect exposed sites such as coal-plant surroundings.', [hes, li]),
    ('Others do not survive a check against their own papers, such as Cairo fruit lead of 22–361 mg/kg on farms whose soil held 0.5–92 mg/kg, or an Indian table with no unit that the abstract gives in mg/g.', [ahm, jai]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in tomatoes?',
  P(('Cadmium is the metal most often detected in fresh tomato, usually at a few µg/kg: half of 3,197 GEMS/Food results and 24 of 27 FDA samples had measurable cadmium.', [gems, fda]),
    ('Lead is detected less often, and arsenic, mercury, nickel and chromium were below reporting limits in every FDA sample, though exposed growing sites can raise any of them.', [gems, fda, li, ahm])), 'GEMS/Food tomato summaries; FDA TDS food 117; Li Table 2; Ahmed Table 5'),
 ('ING-FAQ-02', 'How do heavy metals get into tomatoes?',
  P(('Mainly from the soil and irrigation water at the growing site, and from air near large emitters.', [lu, ahm, li]),
    ('Fruit near a coal-fired power plant held up to 76.3 µg/kg mercury against 0.73 µg/kg in a grocery-store sample.', [li])), 'Lu Table 4; Ahmed Table 5; Li Table 2'),
 ('ING-FAQ-03', 'Are organic tomatoes free from heavy metals?',
  P(('No. Organic-labelled tomatoes in Americas monitoring data had a detected lead median of 1.7 µg/kg and cadmium of 8.2 µg/kg, close to unlabelled tomatoes.', [gems]),
    ('Organically grown Polish tomatoes measured on a dry-weight basis held 26–139 µg/kg lead and 71–216 µg/kg cadmium.', [gro])), 'GEMS/Food PAHO organic labels; Grochowska-Niedworok Table 3'),
 ('ING-FAQ-04', 'Which types of tomato have the lowest levels?',
  P(('In one Romanian survey, red cherry tomatoes held 18.6 µg/kg lead and no detectable cadmium against 66.8 µg/kg lead and 16.5 µg/kg cadmium in standard tomatoes.', [bor]),
    ('Their arsenic was similar, and no other study compared types under one method, so this is a single observation.', [bor])), 'Bora Table 1'),
 ('ING-FAQ-05', 'Which growing regions have the lowest levels?',
  P(('United States market baskets were lowest for lead (all below 4 µg/kg) and among the lowest for cadmium (median 3.3 µg/kg), and Polish and western Iranian surveys found fresh-weight cadmium means of 3 µg/kg.', [fda, rus, hes]),
    ('These are purchase markets or single surveys; the evidence supports avoiding exposed sites more than choosing a country.', [li, ahm])), 'FDA TDS food 117; Rusin Table 7; Heshmati Table 2'),
 ('ING-FAQ-06', 'Do tomato products contain more heavy metals than fresh tomatoes?',
  P(('They are different foods: concentration removes water, and canned products can take up tin from the can during storage.', [buc, tra]),
    ('Their results are on the canned tomato, tomato paste and tomato sauce pages rather than on this page.', [])), 'Buculei pp.300–301; Trandafir Table 3'),
 ('ING-FAQ-07', 'What do the levels in tomatoes mean for health?',
  P(('Tomato is eaten in large amounts, so it contributes to intake even at low concentrations; it supplied 16% of estimated cadmium intake in Ismailia, Egypt, but 2–3% together with eggplant and okra in Australia.', [lou, fsz]),
    ('Measured concentrations are not a safety verdict for any individual diet.', [])), 'Loutfy Figure 1; FSANZ ATDS p.44'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in tomatoes?',
  P(('Yes. The EU limits fruiting vegetables, the food group in which EFSA classifies tomatoes, to 50 µg/kg lead and 20 µg/kg cadmium on a fresh-weight basis after washing, and to 400 µg/kg nickel from July 2025.', [eu, e14, ni]),
    ('Codex sets 50 µg/kg lead for fruiting vegetables in its 2025 edition, and its cadmium maximum for fruiting vegetables does not apply to tomatoes.', [cx])), 'EU 2023/915 3.1.4.1 and 3.2.4.1; EU 2024/1987 3.6.3; EFSA 2014 Table 5; CXS 193 (2025) pp.58, 62'),
 ('ING-FAQ-09', 'Does washing tomatoes remove heavy metals?',
  P(('Partly. In a Romanian study, soaking tap-washed tomatoes in 5% vinegar lowered total arsenic by about half, cadmium by 26–61% and lead by 19–24%.', [bor]),
    ('Metal taken up into the fruit is not removed by washing.', [])), 'Bora Tables 1–2'),
 ('ING-FAQ-14', 'Does cooking destroy heavy metals in tomatoes?',
  P(('No. Boiling did not lower arsenic per gram of dry matter in tomatoes from arsenic-spiked irrigation.', [cla]),
    ('Cookware can add metals: foil baking raised aluminium from 80 to 370 µg/kg, and new stainless steel raised nickel and chromium in simmered tomato sauce.', [dor, hob])), 'Clair-Caliot Table 2; Dordevic Table 4; Hobbie Results'),
 ('ING-FAQ-10', 'Is the arsenic in tomatoes the more toxic inorganic form?',
  P(('Few results separate the forms: 11 of 38 European GEMS/Food inorganic arsenic results were detected, at up to 38.8 µg/kg, four Hong Kong composites were below 3 µg/kg, and EFSA estimated a mean of 1.5–7.7 µg/kg across 484 European results.', [gems, hk, e14]),
    ('Most studies measured total arsenic only.', [gems, bor])), 'GEMS/Food iAs records; HK TDS Appendix 1; EFSA 2014 Table 5'),
 ('TOM-FAQ-01', 'Does irrigating tomatoes with wastewater raise heavy metals?',
  P(('In the studies that compared it, yes for chromium, nickel and cadmium: Nile-irrigated Cairo fruit held 290 µg/kg chromium and 610 µg/kg nickel against 760 and 1,630 µg/kg with industrial wastewater.', [ahm]),
    ('Half reclaimed water in a Chinese trial raised cadmium from 18 to 29 µg/kg and chromium from 49 to 61 µg/kg, smaller differences that were not clearly significant.', [lu])), 'Ahmed Table 5; Lu Table 4'),
 ('TOM-FAQ-02', 'Are hydroponic tomatoes lower in heavy metals?',
  P(('In one Shanghai study, yes: hydroponic tomatoes held 5.6 µg/kg lead and cadmium combined against 47.9 µg/kg for soil-grown tomatoes.', [che]),
    ('Its nutrient water still carried lead (0.036 mg/L), so the result depends on clean water.', [che])), 'Chen Section 3.3, Figure 3'),
 ('TOM-FAQ-03', 'Do tomatoes grown near power plants or mines contain more metals?',
  P(('Near Chinese coal-fired power plants, tomato mercury reached 71.8–76.3 µg/kg at the closest sites against 0.73 µg/kg in a grocery-store sample.', [li]),
    ('In Seville, tomatoes from gardens in a mining district held less lead than city-garden tomatoes (89 against 165 µg/kg dry weight).', [ros])), 'Li Table 2; Rossini-Oliva Table 3'),
 ('TOM-FAQ-04', 'Why are some reported tomato values so much higher than others?',
  P(('Dry-weight results are about 17 times the fresh-weight concentration, and several papers report values that conflict with their own methods.', [hes, jai, gur]),
    ('This page shows those values with the reason and does not compare them.', [])), 'Heshmati Table 2; held-value reasons'),
 ('TOM-FAQ-05', 'Can cooking tomatoes in aluminium or stainless steel add metals?',
  P(('Yes. Baking tomato in foil raised aluminium about four-fold, and acidic tomato and meat dishes leached more aluminium from foil as acidity rose.', [dor, bas]),
    ('Simmering tomato sauce with new stainless steel raised nickel and chromium sharply, an effect that faded after several cooking cycles.', [hob])), 'Dordevic Table 4; Bassioni Tables 1–2; Hobbie Results'),
 ('TOM-FAQ-06', 'Is there aluminium in fresh tomatoes?',
  P(('Fresh Czech tomatoes held 80 µg/kg aluminium before cooking, about 1,700 µg/kg on a dry-weight basis.', [dor]),
    ('Aluminium is not limited in fresh vegetables by the EU or Codex instruments verified here.', [eu, ni, cx])), 'Dordevic Table 4; EU 2023/915; CXS 193'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-tomato-v1', 'family': 'ingredient', 'slug': 'tomato', 'title': 'Tomato', 'display_title': 'Tomato', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, cadmium, arsenic, mercury and nickel in fresh tomatoes: monitoring results, growing sites, irrigation water, greenhouse and hydroponic growing, washing, limits and testing.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Tomato FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, inorganic As, total Hg, Ni, total Cr, Al, Sn and U as reported; no Cr(VI) or methylmercury measured', 'material_form': 'Fresh tomato fruit of any type, raw or of unstated preparation; canned, concentrated, sauce, juice, soup, dried and mixed foods excluded; tree tomato excluded',
               'basis': 'µg/kg; fresh weight, dry weight and unstated basis kept separate without conversion', 'geography_market': 'Growing site, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years 1997–2024 where reported; unreported dates stay unknown', 'stage': 'Cultivation, irrigation, soil remediation, washing, cooking, sourcing and lot testing',
               'population_route': 'Dietary ingestion; consumption surveys', 'comparator_outcome': 'Pooled HMI tomato reference positions on the same basis; same-study subgroup and control contrasts; observational growing-system, site and type comparisons'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to tomato or naming it or its aliases, plus tomato rows in WHO GEMS/Food, FDA TDS and legacy HMI indexes',
                'protocol_ref': 'data/evidence/contracts/tomato/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/ingredient-rollout-2026-10-22/tomato/extraction/'],
                'screening_ref': 'data/evidence/contracts/tomato/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search'],
                'unresolved_access': ['FSANZ 25th Australian Total Diet Study Appendix 3 (raw tomato results)']},
     'source_catalogue': {'topic': 'ingredients/tomato'}, 'retain_history_only': True}

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

quick = P(('Fresh tomatoes are usually low in lead and cadmium: about 3% of monitoring results exceed the EU lead maximum of 50 µg/kg and about 4% the cadmium maximum of 20 µg/kg, and US market baskets were lower still.', [gems, eu, fda]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Cadmium and lead first; mercury, nickel, chromium and arsenic rise at exposed growing sites.', [gems, li, ahm]),
 ('Main drivers', 'Growing site, irrigation water, nearby emitters and, after harvest, cookware.', [lu, li, hob]),
 ('Practical framing', 'Ask where and how the tomatoes were grown, and for fresh-weight lead and cadmium results.', [che, eu])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-tomato-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-11', 'status': 'not_applicable', 'reason': 'Tomato is eaten whole; no study compared peeled and unpeeled fruit. Washing evidence is in ING-FAQ-09.'},
 {'id': 'ING-FAQ-12', 'status': 'not_applicable', 'reason': 'No commonly confused alternative with direct comparative evidence; tree tomato is a different plant and is excluded in scope.'},
 {'id': 'ING-FAQ-13', 'status': 'deferred', 'reason': 'No tomato-specific child exposure estimate or authoritative child guidance in the ledger; infant foods containing tomato are on their own pages.'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Overnight water soaking is not a tomato preparation and was not studied; the vinegar soak is covered in ING-FAQ-09.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative tomato serving guidance for metals in the ledger; intake figures are given in ING-FAQ-07 without inventing a safe amount.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance; occurrence data alone cannot support it.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
import re
def doi_url(sid):
    t = (root / f'wiki/sources/{sid}.md').read_text()
    m = re.search(r'^doi:\s*"?([^"\n]+?)"?\s*$', t, re.M)
    d = m.group(1).strip() if m else ''
    return f'https://doi.org/{d}' if d and d not in ('null', 'None', "''") and d.startswith('10.') else f'../sources/{sid}'
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, locator, scale):
    url = doi_url(sid) if sid != eu else url
    return {'id': f'tomato-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/tomato.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Tomato', 'audiences': (['supplier', 'brand'] if stage not in ('home preparation',) else []) + (['consumer'] if stage in ('home preparation', 'food preparation', 'dietary exposure') else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Other metals, yield, quality and cost not quantified unless stated.',
            'verification_summary': 'Confirm with lot-specific fresh-weight results using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational comparison' if kind == 'observational' else 'Measured comparison' if kind == 'measured' else 'Author, agency or review guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching the fruit or the prepared food, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Not applicable.',
            'other_contaminants': 'Not assessed.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled intervention effect', 'next_action': 'Keep effect unquantified unless measured; single-study effects are not transferred to other farms.'}], 'review': {'record_ref': 'data/evidence/contracts/tomato/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis='Fresh tomato fruit, fresh (wet) weight'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': 'Source-reported or HMI-calculated descriptive values; not a controlled intervention unless the design says so.'}
U = 'Fresh tomato fruit, weight basis not stated'
DW = 'Fresh tomato fruit, dry weight'
controls = [
 control(1, li, 'Li et al. 2017', 'https://doi.org/10.3390/ijerph14121539', 'sourcing and procurement', 'Source tomatoes away from coal-fired power plants', 'observational', 'Field tomatoes around two coal-fired power plants in China, with a grocery-store comparison',
   'Tomato mercury fell from 76.3 µg/kg at the nearest site to 9.8 µg/kg at the farthest around one plant, and was 71.8 and 29.8 µg/kg near a second, against 0.73 µg/kg in grocery-store tomatoes.',
   'Sites at increasing distance from each plant, and a grocery-store sample.',
   [out('tHg', 'lower', 76.33, 9.79, 'Lower mercury farther from the plant (observational)', 'Fruit total mercury by site', 'Nearest versus farthest site, Plant B', 'Table 2, p.4')],
   'Field production near large combustion sources.', 'Observational; site counts and samples per site not reported.', 'Table 2', 'Field survey'),
 control(2, lu, 'Lu et al. 2016', 'https://doi.org/10.1016/j.scitotenv.2015.08.071', 'cultivation', 'Irrigate with groundwater rather than reclaimed water', 'measured', 'Field tomatoes under groundwater or half reclaimed-water irrigation, China, four seasons',
   'Fruit irrigated with half reclaimed water held 29 against 18 µg/kg cadmium, 61 against 49 µg/kg chromium and 68 against 55 µg/kg lead; only the chromium difference approached significance.',
   'Groundwater versus half reclaimed-water irrigation in the same field trial.',
   [out('Cd', 'lower', 29, 18, 'Lower with groundwater', 'Fruit cadmium', 'Reclaimed versus groundwater', 'Table 4, p.7', basis=U),
    out('Cr', 'lower', 61, 49, 'Lower with groundwater (p = 0.08)', 'Fruit chromium', 'Reclaimed versus groundwater', 'Table 4, p.7', basis=U),
    out('Pb', 'lower', 68, 55, 'Lower with groundwater (not significant)', 'Fruit lead', 'Reclaimed versus groundwater', 'Table 4, p.7', basis=U)],
   'Irrigated field production.', 'One trial; third treatment row unlabelled and held.', 'Table 4', 'Field trial'),
 control(3, ahm, 'Ahmed et al. 2023', '../sources/ahmed2023-trace-metals-tomato-wastewater', 'cultivation', 'Avoid irrigation with untreated industrial wastewater', 'observational', 'Farms irrigated from the Nile or with industrial wastewater, south Cairo, summer 2021',
   'Fruit from wastewater-irrigated farms held 760 µg/kg chromium and 1,630 µg/kg nickel against 290 and 610 µg/kg on Nile-irrigated farms.',
   'Three farms per irrigation source.',
   [out('Cr', 'lower', 760, 290, 'Lower with river irrigation (observational)', 'Fruit chromium', 'Wastewater versus Nile', 'Table 5, p.7', basis=U),
    out('Ni', 'lower', 1630, 610, 'Lower with river irrigation (observational)', 'Fruit nickel', 'Wastewater versus Nile', 'Table 5, p.7', basis=U)],
   'Peri-urban irrigated farms.', 'Observational; lead and cadmium values from the same table are held for integrity conflicts.', 'Table 5', 'Farm survey'),
 control(4, cla, 'Clair-Caliot et al. 2021', 'https://doi.org/10.3390/ijerph18147517', 'cultivation', 'Use irrigation water low in arsenic', 'measured', 'Pot-grown tomatoes irrigated with water spiked with arsenate, Burkina Faso',
   'Fruit arsenic was 0.18 and 0.43 µg/g dry weight at 500 and 1,000 µg/L arsenic in irrigation water; values at 0 and 100 µg/L are held because they fall below the paper’s own reporting threshold.',
   'Spiked irrigation water at increasing arsenic concentrations.',
   [out('tAs', 'higher', 180, 430, 'Higher fruit arsenic with more arsenic in water', 'Fruit total arsenic', '500 versus 1,000 µg/L in water', 'Table 2, p.8', basis=DW)],
   'Irrigation from arsenic-bearing groundwater.', 'One composite of six pots per treatment.', 'Table 2', 'Pot experiment'),
 control(5, sal, 'Salem et al. 2024', '../sources/salem2024-tomato-remediated-soil-egypt', 'soil remediation', 'Remediate soil with clay minerals and treat drainage water before irrigation', 'measured', 'Cherry tomatoes in greenhouse and field plots irrigated with agricultural drainage water, Egypt',
   'Fruit nickel fell from 1,000 to 250 µg/kg in the greenhouse and from 88 to 18 µg/kg in the field with clay-mineral remediation and treated water; cadmium was not detected in any treatment.',
   'Untreated soil and drainage water versus remediated soil and treated water.',
   [out('Ni', 'lower', 1000, 250, 'Lower fruit nickel (greenhouse)', 'Fruit nickel', 'Untreated versus remediated', 'Fig. 2A, p.9', basis=U),
    out('Ni', 'lower', 88, 18, 'Lower fruit nickel (field)', 'Fruit nickel', 'Untreated versus remediated', 'Fig. 2B, p.9', basis=U)],
   'Plots irrigated with drainage water.', 'Values read from figure labels; one site.', 'Fig. 2', 'Field and greenhouse trial'),
 control(6, che, 'Chen et al. 2024', 'https://doi.org/10.3390/foods13081151', 'cultivation', 'Grow hydroponically with clean nutrient water', 'measured', 'Hydroponic and soil-grown tomatoes from Shanghai farms, 2022–2023',
   'Hydroponic tomatoes held 5.6 µg/kg lead and cadmium combined against 47.9 µg/kg for soil-grown tomatoes (20 and 22 samples), a significant difference.',
   'Hydroponic versus soil-grown farm samples.',
   [out('Pb', 'lower', 47.9, 5.6, 'Lower lead plus cadmium (combined)', 'Fruit lead plus cadmium', 'Soil versus hydroponic', 'Section 3.3, Figure 3, p.10', basis=U),
    out('Cd', 'lower', 47.9, 5.6, 'Lower lead plus cadmium (combined)', 'Fruit lead plus cadmium', 'Soil versus hydroponic', 'Section 3.3, Figure 3, p.10', basis=U)],
   'Protected production with controlled nutrient water.', 'Lead and cadmium not reported separately for tomato; basis not stated.', 'Section 3.3', 'Farm survey'),
 control(7, bor, 'Bora et al. 2022', 'https://doi.org/10.3390/app12125905', 'home preparation', 'Soak tap-washed tomatoes in 5% vinegar', 'measured', 'Market and garden tomatoes, south-eastern Romania, 2020–2021',
   'After a 5% vinegar soak, market tomatoes held 202 against 389 µg/kg total arsenic, 12.2 against 16.5 µg/kg cadmium and 54.0 against 66.8 µg/kg lead compared with tap-water washing alone.',
   'Tap-water washing versus tap-water washing followed by a vinegar soak.',
   [out('tAs', 'lower', 388.86, 202.19, 'Lower after vinegar soak', 'Fruit total arsenic', 'Tap wash versus vinegar soak', 'Tables 1–2'),
    out('Cd', 'lower', 16.48, 12.2, 'Lower after vinegar soak', 'Fruit cadmium', 'Tap wash versus vinegar soak', 'Tables 1–2'),
    out('Pb', 'lower', 66.81, 53.96, 'Lower after vinegar soak', 'Fruit lead', 'Tap wash versus vinegar soak', 'Tables 1–2')],
   'Household or retail washing.', 'Text reports larger reductions than the tables; no unwashed comparison; quality not measured.', 'Tables 1–3', 'Laboratory preparation'),
 control(8, dor, 'Dordevic et al. 2019', 'https://doi.org/10.1002/fsn3.1204', 'home preparation', 'Avoid baking tomatoes wrapped in aluminium foil', 'measured', 'Fresh tomatoes baked in retail aluminium foils, Czech Republic',
   'Aluminium rose from 80 µg/kg in raw tomato to as much as 370 µg/kg fresh weight after baking in foil.',
   'Raw tomato versus tomato baked in foil.',
   [out('Al', 'higher', 80, 370, 'Higher aluminium after foil baking', 'Tomato aluminium', 'Raw versus baked in foil', 'Table 4, p.3351')],
   'Home and food-service cooking.', 'Highest of five foils; number of tomatoes not stated.', 'Table 4', 'Laboratory cooking'),
 control(9, hob, 'Hobbie et al. 2014', '../sources/hobbie2014-stainless-steel-ni-cr-leaching', 'food preparation', 'Avoid simmering tomato sauce in new stainless steel', 'measured', 'Commercial tomato sauce cooked with stainless-steel coupons and a saucepan',
   'Six hours with grade 304 steel raised sauce nickel from about 0.15 to 5–6 mg/kg and chromium from about 0.1 to about 5.8 mg/kg; release fell to about 0.7 mg/kg each by the sixth cooking cycle.',
   'Sauce cooked with versus without stainless steel, and over repeated cycles.',
   [out('Ni', 'higher', 150, 5750, 'Higher nickel with new stainless steel', 'Sauce nickel', 'Without versus with steel', 'Poster Results'),
    out('Cr', 'higher', 100, 5750, 'Higher chromium with new stainless steel', 'Sauce chromium', 'Without versus with steel', 'Poster Results')],
   'Long cooking of acidic tomato foods.', 'Conference poster; values read from bar charts; tomato sauce, not fresh tomato.', 'Poster Results', 'Laboratory cooking'),
 control(10, bas, 'Bassioni et al. 2012', 'https://doi.org/10.1016/S1452-3981(23)19556-2', 'food preparation', 'Do not cook acidic or salty tomato dishes in aluminium foil', 'measured', 'Tomato juice and meat-extract solutions with aluminium foil',
   'Foil lost 20.2 mg in an acidified tomato-juice and meat solution at pH 2.8, 70.9 mg with vinegar and 82.0 mg with spices; the authors advise against cooking acidic food in foil.',
   'Foil weight loss across solution recipes.',
   [out('Al', 'context', None, None, 'More aluminium released with acid, vinegar and spices', 'Foil weight loss', 'Recipe comparisons', 'Table 2, p.4503')],
   'Home cooking with foil.', 'Foil weight loss, not measured food aluminium; mixed dish, not fresh tomato.', 'Tables 1–2', 'Laboratory test'),
 control(11, bfr, 'BfR 2020', '../sources/bfr2020-aluminium-faq-consumer-products', 'storage and handling', 'Do not wrap cut tomatoes in aluminium foil or store tomato purée in uncoated aluminium', 'guidance', 'Consumer guidance, Germany',
   'The German Federal Institute for Risk Assessment advises against wrapping acidic foods such as cut tomatoes in aluminium foil and against storing tomato purée in uncoated aluminium containers.',
   'Guidance; no measured comparison.',
   [out('Al', 'context', None, None, 'Guidance; effect not measured', 'Aluminium transfer', 'Foil or aluminium contact versus none', 'pp.3, 7')],
   'Home storage of cut or prepared tomato.', 'Guidance only.', 'pp.3, 7', 'Agency guidance'),
 control(12, eu, 'EU 2023/915', 'http://data.europa.eu/eli/reg/2023/915/oj', 'lot acceptance and release', 'Test lots against the fruiting-vegetable maxima for lead and cadmium', 'guidance', 'Fresh fruiting vegetables placed on the EU market',
   'The EU sets 50 µg/kg lead and 20 µg/kg cadmium for fruiting vegetables on a fresh-weight basis, applying after washing and separating the edible part; Regulation (EU) 2024/1987 adds 400 µg/kg nickel from July 2025.',
   'Lot result against the legal maximum.',
   [out('Pb', 'context', None, None, 'Legal maximum 50 µg/kg', 'Lot lead', 'Result versus maximum', 'Annex I 3.1.4.1'),
    out('Cd', 'context', None, None, 'Legal maximum 20 µg/kg', 'Lot cadmium', 'Result versus maximum', 'Annex I 3.2.4.1')],
   'Any lot sold in the EU.', 'Detection only; a passing lot is not a lower-exposure guarantee.', 'Annex I sections 3.1.4 and 3.2.4', 'Regulation'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
