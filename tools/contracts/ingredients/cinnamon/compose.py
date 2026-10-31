"""Compose the cinnamon synthesis record, FAQ-bank dispositions and mitigation records.

Every public sentence carries its own sources. Figures trace to the extraction
records in data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/extraction/
and, for WHO GEMS/Food, to primary/gemsfood-cinnamon-records.csv (HMI-calculated
counts and medians; non-detects bounded, never zero).
"""
import json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon'

gems = 'who-gemsfood-heavy-metal-contaminants'; eu = 'eu-2023-915-contaminants-maximum-levels'; cx = 'codex-cxs-193-1995'
cn = 'chinanhc2025-gb-2762-contaminants'; cn22 = 'usda-fas2023-china-gb-2762-2022-translation'; vn = 'vietnam2011-qcvn-8-2-heavy-metals-en'
tin = 'tinggi2025-spices-herbs-queensland'; cic = 'cicero2022-minerals-spices-aromatic-herbs'; mou = 'moussa2024-spices-herbs-lebanon'
bua = 'bua2016-aromatic-spices-metals-italy'; sav = 'savic2019-serbian-spices-minerals'; win = 'winiarska-mieczan2023-cd-pb-polish-herbs-spices'
isl = 'islam2023-noakhali-spices-bangladesh'; mat = 'matloob2016-iraq-spices-heavy-metals'; sab = 'sabri2025-moroccan-spices-casablanca-metals'
amm = 'ammar2023-element-migration-aluminum-cookware'; efs = 'efsa-chromium-contam-2014'; ush = 'us-house-subcommittee2021-baby-foods-tainted-heavy-metals'
ang = 'angelon-gaetz2018-lead-spices-north-carolina'; nap = 'napier2024-wanabana-lead-apple-cinnamon'; tro = 'troeschel2024-cinnamon-applesauce-lead'
lha = 'lhaac2025-csp41-herbs-spices-wa'; spx = 'spex2023-hot-sauce-chili-powder-metals'; nys = 'nys-doh2019-metals-spices-guidance'
mas = 'masri2025-toxicant-foods-california'; eld = 'el-daouk2020-aluminum-food-lebanon'; xrf = 'authors2025-instrumentation-for-monitoring-toxic-elements-in-food-matrices'

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
 P(('Lead is the metal that decides most cinnamon questions.', []),
   ('In 808 WHO GEMS/Food lead results for cinnamon bark from 2003 to 2024, the median was about 350 µg/kg and 103 results (13%) were above 2,000 µg/kg, the EU maximum for bark spices.', [gems, eu]),
   ('Codex set a 2,500 µg/kg lead limit for dried bark spices in 2025, and China allows 3,000 µg/kg for cassia bark.', [cx, cn])),
 P(('Retail surveys show the same wide spread.', []),
   ('Ten powdered products bought in Queensland ranged from 150 to 7,000 µg/kg lead, 37 bulk samples from Casablanca averaged 2,050 µg/kg, and five cassia samples from Iraq averaged 4,159 µg/kg, while single samples from Indonesia and Serbia held 23 and 310 µg/kg.', [tin, sab, mat, cic, sav]),
   ('Cadmium is usually a few hundred µg/kg, and chromium, nickel and aluminium are high enough in some products to matter alongside lead.', [gems, tin, sab])),
 P(('A separate problem is deliberate adulteration.', []),
   ('In 2023 cinnamon ground in Ecuador and contaminated with lead chromate reached the United States in apple cinnamon pouches that held 1,900–5,800 µg/kg lead as sold, and 566 cases of elevated blood lead were reported in 44 states, the District of Columbia and Puerto Rico.', [nap, tro]),
   ('Those results are kept apart from the ordinary occurrence data on this page.', []),
   ('For a buyer, the supported priority is a lot-specific result for lead and chromium together, with species and form recorded; a species label or an origin alone does not settle it.', [lha, tro, gems])),
],
'identity': [
 P(('This page covers dried cinnamon bark, sold ground or as sticks and pieces, from any Cinnamomum species.', [gems, tin]),
   ('Cassia (C. cassia and related species, including Saigon and Indonesian cinnamon) and Ceylon cinnamon (C. verum, also called C. zeylanicum or true cinnamon) are labelled separately wherever a source names the species, and cinnamon of unstated species stays its own group.', [gems, mat, bua, tin])),
 P(('Species labels are rarely verified.', []),
   ('An Australian survey labelled all ten products C. verum although two came from China and two from Vietnam, where cassia is the usual crop, and no study in the ledger authenticated the species analytically.', [tin]),
   ('Cinnamon flowers, cinnamon sugar, blended teas, cinnamon-flavoured cereals and bakery, infant foods that list cinnamon, and purging cassia (Cassia fistula, a different plant) are outside this scope.', [gems, ush])),
 P(('Place names need the same care.', []),
   ('A WHO GEMS/Food region is the region that reported the result, not where the bark grew, and most surveys report where the product was bought.', [gems, bua, sab]),
   ('Finished applesauce from the 2023 outbreak is a different material: its lead was measured in the puree, not in the cinnamon.', [nap])),
],
'occurrence': [
 P(('The table holds every cinnamon result extracted from 17 monitoring, survey, investigation and regulatory-science sources: one row for each statistic a source reports for a subgroup and metal, so a mean, a range and a single-sample value appear as separate rows.', [gems, tin, sab, bua, mat]),
   ('Ratings place a mean, median or single result against a pooled HMI cinnamon reference built from WHO GEMS/Food subgroup medians and the per-sample results printed by studies of products bought in Australia, Italy, Lebanon, Serbia, Saudi Arabia and Bangladesh; non-detects remain intervals and are never read as zero.', [gems, tin, bua, mou, sav, cic, amm, isl]),
   ('Rows that failed a check against their own paper stay visible with the reason and are not compared, and rows from the outbreak measure applesauce, not cinnamon.', [bua, mat, isl, nap])),
],
'pathways': [
 P(('Cinnamon carries metals from two very different routes.', []),
   ('The ordinary route is the bark and what settles on it: nearly every product carries measurable lead, cadmium, nickel, chromium and aluminium, consistent with uptake from soil and with dust.', [gems, tin, mat]),
   ('In Iraq, unwashed spices held on average 7% more lead and 14% more cadmium than the same spices washed, a sign that part of the burden sits on the surface.', [mat])),
 P(('The second route is adulteration.', []),
   ('The United States Food and Drug Administration traced the 2023 applesauce lead to cinnamon ground in Ecuador and reported that the lead and chromium came from lead chromate, a yellow pigment.', [tro, nap]),
   ('Lead chromate raises lead and chromium together, so the two are screened as a pair; a Western Australian survey of 380 products found no evidence of high lead chromate in the samples it screened.', [tro, lha])),
 P(('Equipment and grinding are plausible third routes.', []),
   ('Australian authors suggest that aluminium utensils and stainless-steel equipment may add aluminium, chromium and nickel; the Vietnamese product with 7,000 µg/kg lead also carried 920,000 µg/kg aluminium, 4,000 µg/kg chromium and 2,000 µg/kg nickel.', [tin]),
   ('No study in the ledger measured cinnamon before and after grinding.', [])),
],
'variation': [
 P(('For lead, cinnamon labelled as Ceylon (C. verum) measured lower than cinnamon labelled as cassia in the largest dataset.', [gems]),
   ('In WHO GEMS/Food, 58 lead results labelled C. verum had a median of 225 µg/kg, with 2 (3%) above 2,000 µg/kg, against a median of 392 µg/kg and 60 of 268 (22%) above 2,000 µg/kg for results labelled cassia.', [gems]),
   ('Most cassia results came from one Western Pacific reporting region, so species and source cannot be separated, and the labels were not verified.', [gems])),
 P(('Within single studies, the C. verum label did not guarantee low lead.', [tin, bua]),
   ('Queensland products labelled C. verum ranged from 150 µg/kg (China) and 160 µg/kg (Vietnam) to 2,400 µg/kg (Sri Lanka), 2,500 µg/kg (India) and 7,000 µg/kg (Vietnam).', [tin]),
   ('Three C. verum samples on the Italian market measured 294 µg/kg (Madagascar) and 766 µg/kg (Indonesia), while the Vietnamese sample was higher but its printed mean conflicts with its own replicate range.', [bua]),
   ('These are lowest observed values from one to two samples per country, not a ranking of countries.', [])),
 P(('Form mattered more consistently for lead.', []),
   ('Sticks and pieces in GEMS/Food had a median of 90 µg/kg and none of 46 results above 2,000 µg/kg, against a median of 560 µg/kg and 20 of 234 above it for ground cinnamon.', [gems]),
   ('Western Australia found that most lead results above 2,000 µg/kg were ground cinnamon.', [lha]),
   ('This is a tentative pattern: the sticks came from fewer regions and years.', [gems])),
 P(('Cadmium follows species and origin less clearly.', []),
   ('GEMS/Food cadmium had a median of about 220 µg/kg with no result above 1,000 µg/kg, and C. verum-labelled results were somewhat lower (median 150 against 230 µg/kg).', [gems]),
   ('One Sri Lankan product in Queensland reached 3,700 µg/kg while the other held 150 µg/kg, and five Iraqi cassia samples averaged 874 µg/kg.', [tin, mat])),
 P(('Choosing sticks for lead can raise chromium.', []),
   ('In the one GEMS/Food submission that measured chromium, five stick samples had a median of 760 µg/kg against 215 µg/kg for ten ground samples.', [gems]),
   ('Arsenic and mercury are low enough in most cinnamon that their comparisons rarely change a decision: GEMS/Food total mercury never exceeded 50 µg/kg and inorganic arsenic was 27 µg/kg at most.', [gems])),
],
'processing': [
 P(('Processing evidence for cinnamon is thin.', []),
   ('Across 23 Iraqi spices, unwashed portions held on average 7% more lead, 14% more cadmium and 11% more mercury than portions washed with tap and deionised water; cinnamon was not reported separately and the unwashed values were not printed.', [mat]),
   ('No study measured roasting, sterilisation or extraction.', [])),
 P(('Finished foods carry the cinnamon’s metals into much larger servings.', []),
   ('A baby-food manufacturer accepted nine cinnamon lots with 20–887 µg/kg lead and 117–345 µg/kg cadmium under an internal specification of 1,000 µg/kg, and another recalculated one lot to the finished food as consumed.', [ush]),
   ('In the outbreak, the adulterated cinnamon raised lead in the whole puree to 1,900–3,000 µg/kg in pouches from affected homes.', [nap])),
],
'controls': [
 P(('Controls for cinnamon act at sourcing, at lot acceptance and at recall.', []),
   ('The measured comparisons are observational: lower lead in sticks than in ground cinnamon and in C. verum-labelled than in cassia-labelled results, and higher lead exceedance in bulk than in packaged spices in Lebanon.', [gems, mou]),
   ('Testing for lead and chromium together detects lead chromate before release, and recall audits found recalled pouches still on 5 of 217 store shelves weeks later.', [lha, tro, nap])),
],
'tradeoffs': [
 P(('Every sourcing lever has a cost.', []),
   ('Sticks were lower in lead but higher in chromium in the one submission that measured both, and the C. verum label did not prevent 2,400–7,000 µg/kg lead in Australian products.', [gems, tin]),
   ('A specification set high enough to pass every lot, such as 1,000 µg/kg for lead in infant-food cinnamon, accepts lots that a lower limit would reject.', [ush])),
 P(('Screening for the adulterant has limits too.', []),
   ('A lead result alone does not show whether lead chromate is present; Western Australia used co-elevated lead and chromium as its screen, while FDA confirmed lead chromate only with an additional analysis.', [lha, tro])),
],
'testing': [
 P(('A useful cinnamon test measures lead, chromium and cadmium, with quantification limits well below 2,000 µg/kg for lead.', [eu, cx]),
   ('Most GEMS/Food lead results carried detection limits of 3–30 µg/kg, but 75 used 100 µg/kg, and arsenic and tin results often used limits of 100–500 µg/kg, too high to describe typical cinnamon.', [gems]),
   ('Several surveys printed values only in figures or named no statistic, and Western Australian and Lebanese reports gave counts of samples above thresholds that conflict with their own figures or tables.', [win, spx, lha, mou])),
 P(('Record species, form, labelled origin and purchase market with every result, and report non-detects with their limit.', [gems, tin]),
   ('Chromium results are total chromium; lead chromate contains hexavalent chromium, but no source in the ledger measured hexavalent chromium in cinnamon.', [tro, efs])),
],
'procurement': [
 P(('Ask for lot-specific lead and chromium results with the laboratory’s quantification limit, compared with the limit in the destination market.', [eu, cx, cn]),
   ('Limits differ: the EU allows 2,000 µg/kg lead in bark spices, Codex 2,500 µg/kg, China 3,000 µg/kg for cassia bark, and Vietnam 2,000 µg/kg lead and 1,000 µg/kg cadmium in spices.', [eu, cx, cn, vn])),
 P(('Record the species, the form and the growing origin separately from where the cinnamon was packed or bought.', [gems, tin]),
   ('Whole sticks and C. verum-labelled lots were lower in lead in the monitoring data, but a label is not a verified species and one survey’s C. verum products reached 7,000 µg/kg.', [gems, tin]),
   ('Lebanese packers with and without a food safety management system showed the same lead exceedance rate, so a management system alone is not evidence of metal control.', [mou])),
],
'product': [
 P(('Cinnamon is eaten in small amounts, but children eat more per kilogram of body weight.', [nys, mas]),
   ('In a Southern California survey, people who ate cinnamon averaged 1.34 g a day, and United States dietary data used by New York State put children under seven at 4.1–9.1 mg per kilogram of body weight a day among eaters, against 1.8 mg for adults.', [mas, nys]),
   ('No source in the ledger estimated what share of a person’s lead intake comes from cinnamon.', [])),
 P(('The outbreak shows what adulterated cinnamon can do in a children’s food.', []),
   ('Pouches held 1,900–3,000 µg/kg lead in affected homes, and among 531 confirmed and probable cases the median highest blood lead was 7.2 µg/dL.', [nap, tro]),
   ('Two cinnamon samples collected from North Carolina homes of children with elevated blood lead held 2,500–2,700 µg/kg lead.', [ang])),
],
'assessment': [
 P(('This assessment covers every source record in the HMI library that is tagged to cinnamon or mentions it, plus every cinnamon row in the WHO GEMS/Food, FDA and other indexed datasets; each has a recorded decision based on its content.', []),
   ('Values from four papers are held because they could not be reconciled with their own methods or tables.', [bua, mat, isl, mou]),
   ('Gaps remain: one X-ray fluorescence study’s cinnamon result sits in an unretrieved supplement, and no study authenticated the cinnamon species.', [xrf, tin])),
],
}

headings = {'summary': 'Cinnamon overview', 'identity': 'What counts as cinnamon', 'occurrence': 'Heavy metal contamination profile of cinnamon',
 'pathways': 'How metals reach cinnamon', 'variation': 'Which cinnamon types and origins measured lower', 'processing': 'Washing, processing and finished foods',
 'controls': 'Mitigation from sourcing to recall', 'tradeoffs': 'Trade-offs and limits of controls', 'testing': 'Testing cinnamon for metals',
 'procurement': 'Buying and verifying cinnamon', 'product': 'Exposure from cinnamon', 'assessment': 'Evidence review and remaining gaps'}

# ------------------------------------------------------------------ 36 assessment answers (record-only, three per section)
A = lambda s, *src: (s, list(src))
answers = {
'identity': [A('Dried cinnamon bark of any Cinnamomum species, ground or whole; cassia, C. verum and unstated species kept separate.', gems, tin, mat),
             A('Cinnamon flowers, cinnamon sugar, blended teas, cinnamon-containing foods and purging cassia are excluded.', gems, ush),
             A('Dry-weight and as-is results of a dried spice are pooled without conversion; outbreak puree values stay a separate material.', gems, nap)],
'summary': [A('Lead decides most cinnamon questions; 13% of GEMS/Food lead results exceeded the EU 2,000 µg/kg bark-spice limit.', gems, eu),
            A('Retail surveys range from tens to thousands of µg/kg lead; cadmium, chromium, nickel and aluminium also matter.', tin, sab, mat),
            A('Lead chromate adulteration is a separate hazard; lot results for lead and chromium together are the supported control.', tro, lha)],
'occurrence': [A('Pb, Cd, total As, inorganic As, total Hg, Cr, Ni, Al and Sn are reported from 17 sources; no Cr(VI) measured.', gems, tin, sab),
               A('Pooled HMI cinnamon references use WHO GEMS/Food subgroup medians and per-sample results from six study families.', gems, tin, bua, cic),
               A('Non-detects are bounded intervals; held values and outbreak puree rows are shown and not rated.', gems, bua, nap)],
'pathways': [A('Soil uptake and surface dust are the ordinary routes; washing lowered part of the lead and cadmium across spices.', mat, tin),
             A('Lead chromate adulteration raised lead and chromium together in the 2023 outbreak cinnamon.', tro, nap),
             A('Processing equipment is a suggested source of aluminium, chromium and nickel, not measured.', tin)],
'variation': [A('C. verum-labelled GEMS/Food lead median 225 µg/kg against 392 µg/kg for cassia-labelled; labels unverified and confounded with region.', gems),
              A('Whole sticks median 90 µg/kg lead against 560 µg/kg ground; sticks higher in chromium in one submission.', gems, lha),
              A('No supported country preference: within-study C. verum products ranged from 150 to 7,000 µg/kg lead.', tin, bua)],
'processing': [A('Unwashed spices held 7% more lead and 14% more cadmium than washed, across 23 spices; cinnamon not reported separately.', mat),
               A('No measured effect of grinding, sterilisation or extraction on cinnamon metals.', tin),
               A('Cinnamon metals carry into finished foods; outbreak puree reached 1,900–5,800 µg/kg lead.', nap, ush)],
'controls': [A('Source whole sticks or verified C. verum where lead is the concern: observational association only.', gems),
             A('Screen lots for lead and chromium together to detect lead chromate before release.', lha, tro),
             A('Recall and recall audits: recalled pouches remained on 5 of 217 store shelves.', nap)],
'tradeoffs': [A('Sticks lower in lead were higher in chromium in the one paired submission.', gems),
              A('A species label does not prevent high lead; C. verum-labelled products reached 7,000 µg/kg.', tin),
              A('High internal specifications accept lots a lower limit would reject.', ush)],
'testing': [A('Measure lead, chromium and cadmium with quantification limits far below 2,000 µg/kg lead.', eu, gems),
            A('Several surveys printed values only in figures or without a named statistic.', win, spx),
            A('Chromium is reported as total; no hexavalent chromium measurement in cinnamon.', tro, efs)],
'procurement': [A('Request lot lead and chromium results with LOQ, against the destination-market limit.', eu, cx, cn, vn),
                A('Record species, form and growing origin separately from packing or purchase market.', gems, tin),
                A('A packer food safety management system did not lower lead exceedance in Lebanon.', mou)],
'product': [A('Cinnamon eaters averaged 1.34 g/day in Southern California; children under seven ate 4.1–9.1 mg/kg body weight/day.', mas, nys),
            A('Outbreak pouches held 1,900–3,000 µg/kg lead; 566 cases; median highest blood lead 7.2 µg/dL among 531 confirmed and probable.', nap, tro),
            A('Home cinnamon samples linked to elevated child blood lead held 2,500–2,700 µg/kg lead.', ang)],
'assessment': [A('Every tagged or mentioning record and indexed dataset row dispositioned on content; 17 occurrence sources extracted.', gems, tin),
               A('Held values: Bua 2016 means outside their ranges, Matloob 2016 mercury after ashing, Islam 2023 lead assignment, Moussa 2024 cadmium exceedance count.', bua, mat, isl, mou),
               A('Access gap: X-ray fluorescence supplement Table 2S; no species authentication.', xrf, tin)],
}

# ------------------------------------------------------------------ supporting section questions (accordions)
support = {
'variation': [
 ('Is Ceylon cinnamon lower in lead than cassia?',
  P(('In the monitoring data, yes on average: GEMS/Food results labelled C. verum had a median of 225 µg/kg lead against 392 µg/kg for cassia-labelled results, and far fewer exceeded 2,000 µg/kg (3% against 22%).', [gems]),
    ('But the labels were not verified, most cassia results came from one reporting region, and Australian products labelled C. verum ranged up to 7,000 µg/kg.', [gems, tin]))),
 ('Are cinnamon sticks lower in metals than ground cinnamon?',
  P(('For lead, yes in the monitoring data: sticks had a median of 90 µg/kg and none of 46 results above 2,000 µg/kg, against 560 µg/kg for ground cinnamon.', [gems]),
    ('For chromium, the one submission measuring both forms found sticks higher (median 760 against 215 µg/kg).', [gems]))),
],
'testing': [
 ('Why do some studies report very high lead in cinnamon?',
  P(('Some high values are real: GEMS/Food holds lead results up to 23,800 µg/kg and Iraqi cassia averaged 4,159 µg/kg.', [gems, mat]),
    ('Others do not survive a check against their own papers, such as a Bangladeshi sample whose lead is 10,050 µg/kg in the text and about 15,470 µg/kg in the paper’s own figure and tables.', [isl]))),
],
}

# ------------------------------------------------------------------ dedicated FAQs (up to 20)
faqs = [
 ('ING-FAQ-01', 'What heavy metals are found in cinnamon?',
  P(('Lead is the metal most often found at levels that matter, with a GEMS/Food median of about 350 µg/kg and 13% of results above the EU limit of 2,000 µg/kg.', [gems, eu]),
    ('Cinnamon also carries cadmium (GEMS/Food median about 220 µg/kg), chromium, nickel and a great deal of aluminium; arsenic and mercury are usually low.', [gems, tin, sab])), 'GEMS/Food cinnamon extraction; Tinggi Table 4; Sabri Table 3'),
 ('ING-FAQ-02', 'How do heavy metals get into cinnamon?',
  P(('Mostly from soil and dust taken up or deposited on the bark, and in some lots from deliberate adulteration with lead chromate.', [mat, tro]),
    ('The 2023 outbreak cinnamon was contaminated this way after grinding in Ecuador.', [tro])), 'Matloob p.2061; Troeschel Public Health Response'),
 ('ING-FAQ-03', 'Is organic cinnamon free from heavy metals?',
  P(('No source in the ledger compares organic and conventional cinnamon for metals.', []),
    ('Organic-labelled lots tested by a baby-food manufacturer held 20–126 µg/kg lead and 117–225 µg/kg cadmium, so organic cinnamon is not metal-free.', [ush])), 'US House report pp.24–26, 30'),
 ('ING-FAQ-04', 'Which type of cinnamon has the lowest lead?',
  P(('In the monitoring data, whole sticks and cinnamon labelled C. verum (Ceylon) were lowest, with lead medians of 90 and 225 µg/kg.', [gems]),
    ('Neither is a guarantee: Australian products labelled C. verum reached 7,000 µg/kg, and sticks were higher in chromium.', [tin, gems])), 'GEMS/Food species and form summaries; Tinggi Supplementary Table 1'),
 ('ING-FAQ-05', 'Which countries produce cinnamon with the lowest levels?',
  P(('The evidence cannot rank countries.', []),
    ('Single samples from Indonesia measured 23 µg/kg lead in one study and 766 µg/kg in another, products from Vietnam and Sri Lanka ranged from 160 to 7,000 µg/kg within one survey, and most datasets record only where cinnamon was bought.', [cic, bua, tin])), 'Cicero Table 4; Bua Table 4; Tinggi Supplementary Table 1'),
 ('ING-FAQ-06', 'Do foods made with cinnamon also contain heavy metals?',
  P(('They can carry the cinnamon’s metals: in the 2023 outbreak, apple cinnamon pouches held 1,900–5,800 µg/kg lead because of adulterated cinnamon.', [nap]),
    ('No study in the ledger measured an ordinary cinnamon and the food made with it together.', [])), 'Napier household and post-recall results'),
 ('ING-FAQ-07', 'What do the levels in cinnamon mean for health?',
  P(('Cinnamon is eaten in small amounts, about 1.8 mg per kilogram of body weight a day for adult eaters in United States data, but children under seven eat two to five times more per kilogram.', [nys]),
    ('No source in the ledger estimated cinnamon’s share of lead intake, and adulterated cinnamon caused the 2023 outbreak with 566 reported cases of elevated blood lead.', [tro])), 'NYS DOH Supplementary Table 9A; Troeschel Results'),
 ('ING-FAQ-08', 'Are there legal limits for heavy metals in cinnamon?',
  P(('Yes, mostly for lead: the EU allows 2.0 mg/kg in bark spices, Codex 2.5 mg/kg, China 3.0 mg/kg for cassia bark and Vietnam 2.0 mg/kg for spices.', [eu, cx, cn, vn]),
    ('Vietnam also limits cadmium (1.0 mg/kg) and mercury (0.05 mg/kg) in spices.', [vn])), 'EU 2023/915 3.1.12.3; CXS 193 lead table; GB 2762-2025 Table 1; QCVN 8-2:2011'),
 ('ING-FAQ-09', 'Can washing or processing remove heavy metals from cinnamon?',
  P(('Only partly, and not reliably: across 23 spices, unwashed portions held on average 7% more lead and 14% more cadmium than washed portions.', [mat]),
    ('No method removes lead chromate from adulterated cinnamon; lots must be tested and rejected.', [tro, lha])), 'Matloob p.2061; Troeschel Discussion; CSP 41 Table 6'),
 ('ING-FAQ-10', 'Is the chromium in cinnamon the toxic hexavalent form?',
  P(('Surveys measure total chromium, and no source in the ledger measured hexavalent chromium in cinnamon.', [efs, tin]),
    ('Lead chromate contains hexavalent chromium, which is why FDA flagged chromium in the outbreak cinnamon.', [tro])), 'EFSA 2014 p.36–37; Troeschel Discussion'),
 ('ING-FAQ-11', 'Are cinnamon sticks lower in metals than ground cinnamon?',
  P(('For lead, yes in GEMS/Food: sticks had a median of 90 µg/kg against 560 µg/kg for ground cinnamon.', [gems]),
    ('For chromium the one paired submission found the opposite.', [gems])), 'GEMS/Food form summaries'),
 ('ING-FAQ-12', 'Is Ceylon cinnamon safer than cassia?',
  P(('For lead, C. verum-labelled cinnamon measured lower on average in monitoring data, but the labels were not verified and individual C. verum products reached 7,000 µg/kg.', [gems, tin]),
    ('No source in the ledger compared the two species directly under one method.', [])), 'GEMS/Food species summaries; Tinggi Table 1'),
 ('ING-FAQ-13', 'How does cinnamon contamination affect children?',
  P(('Children under seven eat 4.1–9.1 mg of cinnamon per kilogram of body weight a day among eaters in United States data, more than adults.', [nys]),
    ('The 2023 outbreak affected mostly young children who ate apple cinnamon pouches.', [nap, tro])), 'NYS DOH Supplementary Table 9A; Napier; Troeschel'),
 ('CIN-FAQ-01', 'What was the 2023 cinnamon applesauce recall?',
  P(('In October 2023 apple cinnamon fruit puree pouches were recalled after North Carolina found 1,900–3,000 µg/kg lead in pouches from affected homes.', [nap]),
    ('FDA traced the lead to cinnamon ground in Ecuador and contaminated with lead chromate; the recall grew to 2,998,088 pouches.', [tro])), 'Napier; Troeschel Introduction and Public Health Response'),
 ('CIN-FAQ-02', 'How can a buyer screen cinnamon for lead chromate?',
  P(('Measure lead and chromium in the same lot: lead chromate raises both, and Western Australia used co-elevated lead and chromium as its screen.', [lha]),
    ('FDA confirmed lead chromate with an additional analysis after the high lead and chromium results.', [tro])), 'CSP 41 Table 6; Troeschel Public Health Response'),
 ('CIN-FAQ-03', 'Does packaged cinnamon have less lead than bulk cinnamon?',
  P(('Possibly: across 13 spices in Lebanon, 31% of bulk composites exceeded 0.3 mg/kg lead against 12% of locally packaged ones.', [mou]),
    ('For cinnamon itself the difference was small: bulk composites averaged 318 µg/kg lead against 269 µg/kg for packaged brands with a food safety system, and 37 bulk Moroccan samples averaged 2,050 µg/kg.', [mou, sab])), 'Moussa Table 1 and S1 Table; Sabri Table 3'),
 ('CIN-FAQ-04', 'Is there aluminium in cinnamon?',
  P(('Yes, often a lot: Queensland products averaged 308,100 µg/kg aluminium and GEMS/Food results from the Western Pacific had a median of 139,000 µg/kg.', [tin, gems]),
    ('Aluminium is not limited in spices by the instruments verified here.', [eu, vn])), 'Tinggi Table 4; GEMS/Food Al records'),
 ('CIN-FAQ-05', 'Has lead in cinnamon been falling?',
  P(('Not clearly: the share of GEMS/Food results above 2,000 µg/kg was 11% for 2003–2012, 19% for 2013–2017 and 8% for 2018–2024.', [gems]),
    ('These are national submissions from changing countries and regions, not a fixed panel of products.', [])), 'GEMS/Food lead by period'),
]

# ------------------------------------------------------------------ build the record
reg = json.loads((root / 'data/evidence/contracts/question-register.json').read_text())
s = {'synthesis_id': 'ingredient-cinnamon-v1', 'family': 'ingredient', 'slug': 'cinnamon', 'title': 'Cinnamon', 'display_title': 'Cinnamon', 'version': 1, 'date': '2026-10-22',
     'description': 'Lead, chromium, cadmium and other metals in cinnamon: monitoring results, cassia and Ceylon, sticks and ground, origins, limits, adulteration, testing and controls.',
     'lede': '', 'article_lede': False, 'citation_style': 'compact', 'citation_placement': 'sentence', 'sections': [], 'section_headings': headings,
     'universal_faqs': {'title': 'Cinnamon FAQs', 'aliases': []},
     'scope': {'analytes': 'Pb, Cd, total As, inorganic As, total Hg, total Cr, Ni, Al, Sn as reported; no Cr(VI) or methylmercury measured', 'material_form': 'Dried cinnamon bark, ground or whole, any Cinnamomum species; cassia, C. verum and unstated species separate; cinnamon-containing foods excluded except outbreak evidence kept as its own scope',
               'basis': 'Dried spice as sold or analysed; µg/kg; dry-weight and as-is labels pooled; outbreak puree as sold', 'geography_market': 'Labelled origin, purchase market or WHO reporting region as each source reports',
               'period': 'Source collection years 2000–2025 where reported; unreported dates stay unknown', 'stage': 'Cultivation, processing, sourcing, lot release, finished foods and recall',
               'population_route': 'Dietary ingestion; consumption surveys; outbreak blood lead', 'comparator_outcome': 'Pooled HMI cinnamon reference positions; same-study subgroup contrasts; observational species, form and packaging comparisons'},
     'search': {'status': 'in_progress', 'scope': 'Every wiki/sources record tagged to cinnamon or naming it or its aliases, plus cinnamon rows in WHO GEMS/Food, FDA TDS, FDA infant-food and legacy HMI indexes',
                'protocol_ref': 'data/evidence/contracts/cinnamon/evidence-ledger.json', 'record_refs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/extraction/'],
                'screening_ref': 'data/evidence/contracts/cinnamon/evidence-ledger.json', 'searched_through': '2026-10-22',
                'limitations': ['Existing HMI library only; no new external literature search'],
                'unresolved_access': ['Johnson-Restrepo et al. 2025 supplementary Table 2S (cinnamon XRF result)']},
     'source_catalogue': {'topic': 'ingredients/cinnamon'}, 'retain_history_only': True}

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

quick = P(('Lead is the metal to check in cinnamon: about one in eight monitoring results exceeds the EU limit of 2,000 µg/kg, and adulteration with lead chromate caused a 2023 outbreak.', [gems, eu, tro]))
quick['facets'] = [dict(label=l, **P((t, src))) for l, t, src in [
 ('Metals of concern', 'Lead first, then chromium and cadmium; aluminium is high but unregulated, and arsenic and mercury are usually low.', [gems, tin]),
 ('Main drivers', 'Soil and dust on the bark, form and species label, and deliberate adulteration with lead chromate.', [mat, gems, tro]),
 ('Practical framing', 'Ask for lot-specific lead and chromium results, with species and form recorded.', [lha, eu])]]
s['quick_read'] = quick
(root / 'data/evidence/syntheses/ingredient-cinnamon-v1.json').write_text(json.dumps(s, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ FAQ bank dispositions
bank = [{'id': i, 'status': 'selected', 'question': q, 'answer_locator': q, 'primary_locator': loc, 'source_keys': p['source_keys']} for i, q, p, loc in faqs]
bank += [
 {'id': 'ING-FAQ-14', 'status': 'not_applicable', 'reason': 'Cooking does not remove elements and no cinnamon cooking study exists; the question is folded into ING-FAQ-09 (washing and processing).'},
 {'id': 'ING-FAQ-15', 'status': 'not_applicable', 'reason': 'Soaking is not a usual cinnamon preparation and no soaking study exists in the ledger.'},
 {'id': 'ING-FAQ-16', 'status': 'deferred', 'reason': 'No authoritative cinnamon serving guidance for metals in the ledger; intake figures are given in ING-FAQ-07 and ING-FAQ-13 without inventing a safe amount.'},
 {'id': 'ING-FAQ-17', 'status': 'deferred', 'reason': 'No authoritative elimination or substitute guidance for cinnamon metals; occurrence data alone cannot support it.'}]
(audit / 'faq-bank-dispositions.json').write_text(json.dumps({'selected_count': len(faqs), 'bank': bank}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ mitigation records (stage-led table)
def control(i, sid, label, url, stage, ctl, kind, material, action, comparator, outcomes, applicability, uncertainty, locator, scale):
    return {'id': f'cinnamon-control-{i}', 'source_id': sid, 'source_label': label, 'primary_url': url, 'dataset_family': sid, 'dependent_pages': ['wiki/ingredients/cinnamon.md'],
            'chain_order': i, 'control': ctl, 'stage': stage, 'material': material, 'material_filter': 'Cinnamon', 'audiences': ['supplier', 'brand'] + (['consumer'] if stage in ('dietary exposure', 'packaging and storage') else []),
            'tested_scale': scale, 'evidence_kind': {'observational': 'dataset', 'measured': 'dataset'}.get(kind, kind), 'action_summary': action, 'duration': 'As reported by the source', 'conditions_summary': applicability,
            'unit_summary': 'Source sampling units; no independent intervention units unless stated.', 'tradeoff_summary': 'Other metals, cost and supply not quantified unless stated.',
            'verification_summary': 'Confirm with lot-specific lead and chromium results using an adequate quantification limit.', 'comparator': comparator,
            'source_design_kind': kind, 'design': 'Observational comparison' if kind == 'observational' else 'Measured comparison' if kind == 'measured' else 'Author, agency or review guidance',
            'conditions': applicability, 'replication': 'One study family.', 'mechanism': 'Reduces metal reaching the cinnamon lot, or detects it before release.',
            'uncertainty': uncertainty, 'calculation': 'No percentage calculated unless shown in outcomes.', 'basis_yield_mass_balance': 'Not applicable.',
            'other_contaminants': 'Not assessed.', 'nutrition_quality_yield': 'Not assessed.', 'waste_destination': 'Not assessed.', 'cost_status': 'Not quantified.',
            'commercial_feasibility': 'Not assessed.', 'applicability': applicability, 'verification': 'Lot testing.', 'method': 'See source.', 'funding_coi': 'As disclosed by the source.',
            'extraction_gaps': [{'field': 'controlled intervention effect', 'next_action': 'No controlled cinnamon intervention study in the library; keep effect unquantified unless measured.'}], 'review': {'record_ref': 'data/evidence/contracts/cinnamon/evidence-ledger.json'}, 'outcomes': outcomes}
def out(analyte, direction, start, end, label, endpoint, comparison, locator, basis='Dried cinnamon as sold or analysed'):
    return {'analyte': analyte, 'direction': direction, 'period': 'As reported', 'start': start, 'end': end, 'unit': 'µg/kg', 'effect_label': label, 'endpoint': endpoint,
            'comparison': comparison, 'basis': basis, 'locator': locator, 'source_values_note': 'Source-reported or HMI-calculated descriptive values; observational, not a controlled intervention.'}
gurl = 'https://www.who.int/teams/nutrition-and-food-safety/databases/global-environment-monitoring-system-food-contamination'
controls = [
 control(1, gems, 'WHO GEMS/Food', gurl, 'sourcing and procurement', 'Prefer whole sticks or pieces where lead is the concern', 'observational', 'Cinnamon bark results submitted to WHO GEMS/Food, 2013–2024',
   'Results for sticks and pieces had a lead median of 90 µg/kg and none of 46 above 2,000 µg/kg, against a median of 560 µg/kg and 20 of 234 above it for ground cinnamon.',
   'Whole versus ground cinnamon in the same database (HMI-calculated medians; non-detects bounded).',
   [out('Pb', 'lower', 560, 90, 'Lower lead in whole cinnamon (observational)', 'Median lead by form', 'Ground versus whole', 'primary/gemsfood-cinnamon-records.csv, lead by form'),
    out('Cr', 'higher', 215, 760, 'Higher chromium in sticks (one submission)', 'Median chromium by form', 'Ground versus whole', 'primary/gemsfood-cinnamon-records.csv, chromium WPRO 2021')],
   'Forms come from different regions and years; form labels from submitters.', 'Observational; fewer stick results; chromium trade-off from one submission.', 'GEMS/Food form summaries', 'Monitoring database'),
 control(2, gems, 'WHO GEMS/Food', gurl, 'sourcing and procurement', 'Specify verified Ceylon (C. verum) cinnamon where lead is the concern', 'observational', 'Cinnamon bark results labelled by species, WHO GEMS/Food',
   'Results labelled C. verum had a lead median of 225 µg/kg with 3% above 2,000 µg/kg, against 392 µg/kg and 22% for cassia-labelled results; cadmium medians 150 against 230 µg/kg for unstated species.',
   'C. verum-labelled versus cassia-labelled results in the same database.',
   [out('Pb', 'lower', 392, 225, 'Lower lead in C. verum-labelled cinnamon (observational)', 'Median lead by species label', 'Cassia versus C. verum label', 'primary/gemsfood-cinnamon-records.csv, lead by species')],
   'Species labels unverified; cassia results concentrated in one reporting region.', 'Confounded by region; a label is not an authenticated species.', 'GEMS/Food species summaries', 'Monitoring database'),
 control(3, lha, 'Western Australia CSP 41', '../sources/lhaac2025-csp41-herbs-spices-wa', 'lot acceptance and release', 'Test each lot for lead and chromium together to screen for lead chromate', 'observational', '380 retail herb and spice products, Western Australia, 2024–2025',
   'The survey screened for lead chromate by co-elevated lead and chromium and found no evidence of it; most lead results above 2,000 µg/kg were ground cinnamon.',
   'Paired lead and chromium results per product against nominal thresholds.',
   [out('Pb', 'context', None, None, 'Detection, not removal', 'Co-elevated lead and chromium', 'Paired screen', 'Table 6, Lead Chromate row, p.23'),
    out('Cr', 'context', None, None, 'Detection, not removal', 'Co-elevated lead and chromium', 'Paired screen', 'Table 6, Lead Chromate row, p.23')],
   'Any cinnamon lot-release testing.', 'Screen only; confirmation of lead chromate needs further analysis.', 'Table 6', 'Retail surveillance'),
 control(4, tro, 'Troeschel et al. 2025', 'https://www.cdc.gov/mmwr/volumes/74/wr/mm7414a2.htm', 'lot acceptance and release', 'Confirm suspected adulteration and trace it to the ingredient', 'measured', 'Recalled apple cinnamon pouches and cinnamon from the manufacturer, 2023–2024',
   'FDA testing found high lead and chromium in recalled product and in the manufacturer’s cinnamon (5 January 2024) and later attributed both to lead chromate in cinnamon ground in Ecuador (29 February 2024).',
   'Finished product and ingredient testing during an outbreak investigation.',
   [out('Pb', 'context', None, None, 'Source identified; no concentrations printed', 'Lead in ingredient cinnamon', 'Implicated versus expected', 'Public Health Response'),
    out('Cr', 'context', None, None, 'Source identified; no concentrations printed', 'Chromium in ingredient cinnamon', 'Implicated versus expected', 'Public Health Response')],
   'Outbreak response; applies when finished-food results are high.', 'After-the-fact detection; prevention requires routine lot testing.', 'Public Health Response; Discussion', 'Regulatory investigation'),
 control(5, mat, 'Matloob 2016', 'https://doi.org/10.15244/pjoes/62401', 'food processing', 'Wash bark before grinding to remove surface deposits', 'measured', '23 spices bought in Babil, Iraq (cinnamon included; not reported separately)',
   'Unwashed portions held on average 7% more lead, 14% more cadmium and 11% more mercury than portions washed with tap then deionised water.',
   'Unwashed versus washed portions of the same spices.',
   [out('Pb', 'lower', None, None, 'Unwashed 7% higher (all spices pooled)', 'Spice lead', 'Unwashed versus washed', 'Results p.2061'),
    out('Cd', 'lower', None, None, 'Unwashed 14% higher (all spices pooled)', 'Spice cadmium', 'Unwashed versus washed', 'Results p.2061')],
   'Surface deposits only; adulterants mixed into ground product are not removed.', 'Not cinnamon-specific; unwashed values not printed.', 'Results p.2061', 'Laboratory preparation'),
 control(6, mou, 'Moussa et al. 2024', 'https://doi.org/10.1371/journal.pone.0307884', 'packaging and storage', 'Prefer packaged over bulk spices', 'observational', '13 spices in Lebanon, bulk versus locally packaged and imported composites, 2020',
   '31% of bulk composites exceeded 0.3 mg/kg lead against 12% of locally packaged composites with or without a food safety management system.',
   'Bulk versus packaged composites of the same spices and collections.',
   [out('Pb', 'lower', None, None, 'Lower lead exceedance in packaged spices (all spices pooled)', 'Share of composites above 0.3 mg/kg lead', 'Bulk versus packaged', 'Table 1; section 3.4')],
   'Retail purchase of spices.', 'Not cinnamon-specific; composites; exceedance shares only.', 'Table 1', 'Market survey'),
 control(7, mou, 'Moussa et al. 2024', 'https://doi.org/10.1371/journal.pone.0307884', 'sourcing and procurement', 'Require supplier certificates of analysis for metals', 'guidance', 'Spice packers in Lebanon',
   'Packers with and without a food safety management system had the same lead exceedance rate (12%), so the authors recommend approved suppliers with certificates of analysis for metals.',
   'Packers with versus without a food safety management system.',
   [out('Pb', 'context', None, None, 'No difference by management system', 'Share of composites above 0.3 mg/kg lead', 'With versus without system', 'Table 1; Discussion')],
   'Supplier approval for spices.', 'Guidance; supplier testing not evaluated.', 'Discussion after section 3.4', 'Author guidance'),
 control(8, ush, 'US House Subcommittee 2021', '../sources/us-house-subcommittee2021-baby-foods-tainted-heavy-metals', 'lot acceptance and release', 'Set ingredient specifications that reject high-lead cinnamon', 'observational', 'Cinnamon lots tested by two US baby-food manufacturers, 2016–2019',
   'One manufacturer accepted all nine cinnamon lots (lead 20–887, cadmium 117–345 µg/kg) under a 1,000 µg/kg specification; the other used 100 µg/kg but approved deviations.',
   'Lot results against each manufacturer’s internal specification.',
   [out('Pb', 'context', None, None, 'Lots of 20–887 µg/kg accepted under a 1,000 µg/kg specification', 'Lot lead', 'Result versus specification', 'pp.24–26'),
    out('Cd', 'context', None, None, 'Lots of 117–345 µg/kg accepted under a 1,000 µg/kg specification', 'Lot cadmium', 'Result versus specification', 'p.30')],
   'Ingredient release for infant foods.', 'Selected excerpts of manufacturer records; not representative.', 'pp.24–31, 41', 'Manufacturer records'),
 control(9, nap, 'Napier et al. 2024', 'https://www.cdc.gov/mmwr/volumes/73/wr/mm7328a2.htm', 'dietary exposure', 'Recall contaminated products and audit removal from shelves', 'measured', 'Apple cinnamon puree pouches, North Carolina, 2023',
   'After the October 2023 recall, county staff still found and removed recalled pouches in 5 of 217 stores, and products collected after the recall held 1,900–5,800 µg/kg lead.',
   'Store visits after the recall.',
   [out('Pb', 'context', None, None, 'Recalled product (1,900–5,800 µg/kg) still on 5 of 217 store shelves', 'Lead in recalled pouches', 'Post-recall sampling', 'North Carolina Recall Audit', basis='Finished applesauce as sold')],
   'Post-market response to an adulterated ingredient.', 'Audit in one state.', 'Recall audit section', 'Public health response'),
 control(10, tin, 'Tinggi et al. 2025', 'https://www.oaepublish.com/articles/jeea.2025.10', 'food processing', 'Avoid aluminium and worn stainless-steel contact surfaces in processing', 'guidance', 'Powdered cinnamon sold in Queensland',
   'The authors suggest aluminium utensils and stainless-steel equipment may add aluminium, chromium and nickel; the product with the most lead also carried the most aluminium, chromium and nickel.',
   'Guidance; no measured comparison.',
   [out('Al', 'context', None, None, 'Guidance; effect not measured', 'Equipment contact', 'Aluminium or steel versus other surfaces', 'Discussion pp.6–7')],
   'Grinding and handling equipment.', 'Suggested mechanism, not tested.', 'Discussion', 'Author guidance'),
]
(audit / 'interventions.json').write_text(json.dumps({'version': 2, 'records': controls}, indent=2, ensure_ascii=False) + '\n')
print('sections', len(s['sections']), 'faqs', len(faqs), 'controls', len(controls))
