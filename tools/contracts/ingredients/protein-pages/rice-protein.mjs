// Authored synthesis for /ingredients/rice-protein (order HMI-PROTEIN-PEA-RICE-1).
// Every number is from a cited source record or is labelled arithmetic on one.
// FDA descriptive figures are Index calculations over the 19 sample rows routed
// to this page (Full Analytical Results - Rice Products, checked against the PDF).
// GEMS/Food lead figures are Index calculations over the 22 PAHO rows written by
// gems-rice-protein.mjs (June 2026 export, one row per powder).
import { para, section, writeAuthored } from './author.mjs';

const F = 'fda2013-ias-rice-products-sampling';
const HO = 'hosojima2017-rice-endosperm-protein-cadmium';
const C = 'cfia2020-toxic-metals-selected-foods-2018-19';
const H = 'horvath2025-hungary-protein-powders-metals';
const S = 'scott2025-brown-white-rice-arsenic';
const Z = 'zhao2023-silicon-cd-rice';
const SE = 'seyfferth2025-rice-water-management-as-hg-cd';
const EU = 'eu-2023-915-contaminants-maximum-levels';
const OL = 'oehha-lead-prop65-listing';
const OC = 'oehha-cadmium-prop65-madl-2001';
const OA = 'oehha-arsenic-prop65-listing';
const FI = 'fda2020-ias-infant-rice-cereal-guidance';
const CN = 'usda-fas2023-china-gb-2762-2022-translation';
const CN25 = 'chinanhc2025-gb-2762-contaminants';
const G = 'who-gemsfood-heavy-metal-contaminants';
const RG = 'ring2021-ireland-protein-powders-metals';

const q = (question, a) => ({ q: question, a });

const record = {
  description: 'Inorganic arsenic, cadmium, mercury and lead evidence for brown rice protein and other rice protein powders, with sample-level FDA and WHO GEMS/Food results, applicable limits and what a buyer should ask a supplier.',
  lede: 'Rice protein carries inorganic arsenic, lead and cadmium: 17 of 19 US rice protein samples had quantified inorganic arsenic, all 22 powders in WHO monitoring from the Americas had quantified lead, and the only cadmium figure is for rice endosperm protein.',
  quick_read: {
    ...para(['Rice protein carries inorganic arsenic, lead and cadmium.', F, G, HO, C], 'No result is linked to where the rice was grown.'),
    facets: [
      { label: 'Metals of concern', ...para(['Inorganic arsenic was quantified in 17 of 19 US samples at 25 to 152 µg/kg.', F], ['Lead was quantified in all 22 powders from the Americas at 110 to 445 µg/kg.', G], ['Cadmium and mercury have one study and one sample each.', HO, C]) },
      { label: 'Main drivers', ...para(['Arsenic concentrates in rice bran, which brown rice keeps.', S], ['Powders labeled brown rice protein measured higher inorganic arsenic than those labeled rice protein in a small comparison.', F]) },
      { label: 'Practical framing', ...para('Ask for inorganic arsenic, not total arsenic only, plus lead and cadmium on every lot.', ['Summary arsenic figures can include substituted values.', F]) },
    ],
  },
  section_headings: {
    summary: 'Rice protein overview',
    identity: 'What counts as rice protein',
    occurrence: 'Heavy metal contamination profile of rice protein',
    pathways: 'How metals reach rice protein',
    variation: 'Which rice protein sources measured lower',
    processing: 'Processing effects and derivatives',
    controls: 'Mitigation for rice protein',
    tradeoffs: 'Trade-offs and limits of controls',
    testing: 'Testing rice protein for metals',
    procurement: 'Buying and verifying rice protein',
    product: 'Exposure from rice protein',
    assessment: 'Requirements and evidence review',
  },
  universal_faqs: { title: 'Rice protein FAQs', aliases: [] },
  sections: [
    section('summary', {
      overview: [
        para(['Inorganic arsenic is the best-documented metal in rice protein: FDA sampled 19 rice protein powders from US retail in its 2012 to 2013 rice survey, and 17 had quantified inorganic arsenic between 25 and 152 µg/kg, with a median of 47 µg/kg (an Index calculation).', F], ['The other two had total arsenic below the 10 µg/kg detection limit.', F]),
        para(['Cadmium is the second concern: five batches of rice endosperm protein made in Japan averaged 0.14 mg/kg with a standard deviation of 0.17 mg/kg, and a Canadian survey reported that rice-based protein powders had the highest metal levels of the protein types it tested, especially cadmium.', HO, C], ['One brown rice protein powder in that survey had 0.022 ppm mercury, the survey maximum.', C]),
        para(['Lead was quantified in all 22 rice protein powders that WHO GEMS/Food holds from the Americas, sampled at random and reported for 2014 and 2017: 110 to 445 µg/kg dry weight, median 241 µg/kg (an Index calculation).', G], ['No result is linked to where the rice was grown, so China, Vietnam, the USA and Canada cannot be compared as origins.', F, G], 'For a buyer, that makes lot testing for inorganic arsenic, lead and cadmium the decision point rather than origin.'),
      ],
      answers: [
        para(['Inorganic arsenic is supported by 19 FDA samples and lead by 22 GEMS/Food results; cadmium by one endosperm protein study and a Canadian survey statement; mercury by one sample.', F, G, HO, C]),
        para(['Lot testing for inorganic arsenic, lead and cadmium deserves priority, and the material type matters: in a small comparison, powders labeled brown rice protein had higher inorganic arsenic than those labeled rice protein.', F]),
        para(['The limiting gaps are growing origin, cadmium in brown rice protein, which has no quantified result, and lead results from outside the Americas.', F, HO, G]),
      ],
    }),
    section('identity', {
      overview: [
        para('This page covers protein isolated or concentrated from rice, including brown rice protein, sold as powder or used as an ingredient.', ['FDA classified 12 samples as rice protein powders and included 7 more rice protein products under protein beverages, measured as powder before mixing.', F], ['WHO GEMS/Food records its lead results under products for special nutritional use, with each powder named as sold.', G], ['The cadmium study used rice endosperm protein made from milled rice flour, which is a different fraction from brown rice protein.', HO]),
        para(['FDA\'s rice protein powder category includes blends and meal replacements as well as single-protein powders, so those 12 samples describe the category as FDA sampled it.', F], 'Rice grain, bran, flour and drinks are on [[ingredients/rice]], pea protein on its own page, and mixed formulas on the protein powder product page.'),
      ],
      answers: [
        para(['The page covers rice protein powders: brown rice protein, rice protein labeled without brown, endosperm protein and FDA\'s rice protein powder category.', F, HO]),
        para(['Brown rice protein, endosperm protein and blended powders are distinct materials; the cadmium figure belongs to endosperm protein only.', HO], ['FDA\'s category mixes single-protein powders with blends.', F]),
        para('Rice grain results do not convert to rice protein results, because protein isolation separates the protein from starch and, for brown rice protein, may keep bran material.', ['Arsenic concentrates in the bran and germ, so the fraction used changes the expected arsenic.', S]),
      ],
    }),
    section('occurrence', {
      overview: [
        para(['The table lists every rice protein result in the Index: 86 rows from five sources.', F, G, HO, C, H], ['WHO GEMS/Food supplies 22 individual lead results, grouped in the table as 14 powders labeled brown rice protein and 8 labeled rice protein.', G], ['FDA supplies total arsenic, inorganic arsenic and the two methylated arsenic species for up to 19 samples, measured in the powder as sold.', F], 'Low, Moderate and High positions compare each FDA sample with the other FDA rice protein samples; they are not market-wide grades or safety grades.'),
        para(['Total arsenic in the 17 FDA samples with a reported value, three of them trace results, ran from 60 to 260 µg/kg, median 100 µg/kg, and inorganic arsenic from 25 to 152 µg/kg, median 47 µg/kg (Index calculations).', F], ['Lead ran from 110 to 445 µg/kg dry weight across the 22 GEMS/Food powders, median 241 µg/kg (an Index calculation).', G], ['Cadmium appears only as the endosperm protein mean of 0.14 ± 0.17 mg/kg, and mercury as one 0.022 ppm sample.', HO, C]),
      ],
      answers: [
        para(['Total arsenic, inorganic arsenic, dimethylarsinic acid and monomethylarsonic acid were measured by FDA; cadmium by one study; mercury by one survey; lead by WHO GEMS/Food in 22 powders; and lead, cadmium, arsenic and mercury in one brown rice protein powder below an unprinted detection limit.', F, HO, C, G, H]),
        para(['Inorganic arsenic was quantified in 17 of 19 FDA samples, 25 to 152 µg/kg; three total arsenic values were trace results between the 10 µg/kg detection limit and the 80 µg/kg quantification limit.', F], ['Five endosperm protein batches averaged 0.14 mg/kg cadmium with a standard deviation of 0.17 mg/kg.', HO]),
        para(['Brown rice protein cadmium has no quantified result.', HO], ['Two FDA inorganic arsenic values are substitutes for non-detects and are held from comparison.', F]),
      ],
    }),
    section('pathways', {
      overview: [
        para('Rice is grown in flooded paddies, and the rice plant takes up arsenic and cadmium from paddy soil and water; [[ingredients/rice]] reviews that evidence in detail.', ['Within the grain, arsenic concentrates in the outer bran and germ layers, which brown rice keeps and white rice loses in milling.', S]),
        para(['No study in the Index traces metals from paddy to rice protein, or measures contamination added during extraction, drying or packaging.', F, HO], ['The Canadian survey links higher cadmium in protein powders to rice-based products but does not identify where in the supply chain it enters.', C]),
      ],
      answers: [
        para(['Root uptake from paddy soil explains why rice carries arsenic and cadmium, and bran localization explains why brown rice holds more arsenic.', S], 'Neither has been measured through to rice protein.'),
        para(['No study measured contamination from processing, equipment or packaging for rice protein.', F, HO]),
        para(['The rice-based attribution for cadmium is a survey interpretation, not a traced pathway.', C]),
      ],
    }),
    section('variation', {
      overview: [
        para(['The clearest lower-arsenic signal is by product label within the FDA survey: three powders labeled rice protein had 25, 30 and 47 µg/kg inorganic arsenic, against 37, 53 and 99 µg/kg in three powders labeled brown rice protein, a fourth of which was below detection.', F], ['That direction fits the higher arsenic of bran-containing brown rice, but with three or four samples per group it is a tentative difference, not a supported preference.', S]),
        para(['By FDA category, the six quantified protein beverage powders had a median inorganic arsenic of 42 µg/kg and the eleven quantified rice protein powder category samples a median of 50 µg/kg; the highest sample, 152 µg/kg, was a blend of protein, fruits and vegetables (Index calculations).', F], 'The categories overlap widely, so they do not separate lower and higher sources.'),
        para(['For lead, the label split does not repeat: 14 GEMS/Food powders labeled brown rice protein had a median of 237 µg/kg (110 to 394 µg/kg) and 8 labeled rice protein a median of 255 µg/kg (147 to 445 µg/kg), Index calculations.', G], 'So brown rice protein measured higher for inorganic arsenic but not for lead, and no label is lower for both.'),
        para(['No rice protein result is linked to the country where the rice was grown: FDA product rows carry no origin, the Canadian mercury sample gives none, and the endosperm protein was made in Japan from Koshihikari rice flour whose growing location is not stated.', F, C, HO], ['WHO GEMS/Food gives only the reporting region, the Americas, and for 2014 marks one powder domestic, one imported and three unknown; it names no country.', G], ['A brown rice protein powder produced in the USA was below an unprinted detection limit for all four metals, which cannot rank it.', H], 'Comparing China, Vietnam, the USA and Canada needs lot results for rice protein linked to the growing region.'),
      ],
      answers: [
        para(['No rice protein result is linked to growing origin, conditions, variety or harvest period; FDA rows carry product labels and categories only, and GEMS/Food rows a reporting region.', F, C, G]),
        para(['Variation is between retail products: inorganic arsenic ran from 25 to 152 µg/kg across 17 quantified FDA samples.', F], ['Batch variation is visible only in the endosperm protein standard deviation of 0.17 mg/kg cadmium.', HO]),
        para(['The label comparison supports asking whether a protein is made from brown rice; it does not support a country or supplier preference.', F, S], 'Generalizing from US retail samples or one WHO region to a growing region would be unjustified.'),
      ],
      questions: [
        q('Is brown rice protein higher in arsenic than other rice protein?', para(['In the FDA survey, powders labeled brown rice protein had 37 to 99 µg/kg inorganic arsenic where quantified, and powders labeled rice protein had 25 to 47 µg/kg.', F], ['Rice bran concentrates arsenic, which fits that direction.', S], 'Three or four samples per group make it tentative.')),
        q('Can country of origin pick a lower-arsenic rice protein?', para(['Not on current evidence: no rice protein result names the growing region.', F, C, HO, G], 'The rice grain evidence on origin does not transfer to protein without measurements of the protein itself.')),
      ],
    }),
    section('processing', {
      overview: [
        para(['The endosperm protein study washed its protein four times with dilute hydrochloric acid to remove minerals and heavy metals such as cadmium, but it reports no cadmium value before washing, so how much the step removed is unmeasured.', HO]),
        para(['Milling removes the bran and germ where arsenic concentrates, so protein made from milled rice starts from a lower-arsenic fraction than brown rice protein.', S], ['No study compares arsenic in rice protein made from brown rice with protein made from milled rice; the FDA label comparison is the nearest evidence.', F]),
      ],
      answers: [
        para(['No processing step has a measured before-and-after effect on metals in rice protein.', HO, F]),
        para(['Brown rice protein keeps bran-associated material; endosperm protein starts from milled flour.', S, HO]),
        para('Without a mass balance, removal, redistribution and concentration cannot be distinguished.', ['The acid wash is described as a removal step but has no measured outcome.', HO]),
      ],
    }),
    section('controls', {
      overview: [
        para(['In a pot experiment, spraying rice with silicon lowered cadmium in brown rice grain by 13.5 to 65.7 percent, depending on variety.', Z], 'That is a grain result; its effect on rice protein has not been measured.'),
        para(['Acid washing during protein extraction is described as a cadmium removal step without a measured result.', HO], 'For a buyer, the verifiable control is lot testing of the finished protein for inorganic arsenic and cadmium with stated quantification limits.'),
      ],
      answers: [
        para(['Foliar silicon for grain cadmium and acid washing of extracted protein have been described; only the silicon effect on grain is measured.', Z, HO]),
        para(['The silicon result comes from a pot experiment in cadmium-amended soil, compared with unsprayed plants of the same variety.', Z]),
        para('No field or commercial evidence links either control to lower metals in rice protein.', ['Verification rests on lot testing.', F]),
      ],
    }),
    section('tradeoffs', {
      overview: [
        para(['Controls that lower arsenic in rice can raise cadmium: in a two-year field study, the driest water management lowered grain arsenic and mercury but raised grain cadmium by 50 to 97 percent against the most flooded paddy, and cut yield by 25 to 40 percent.', SE], 'A rice protein supplier changing its rice source or growing practice therefore needs both metals retested.'),
        para(['The FDA data also show that total arsenic alone can mislead: across the 17 samples with both values, inorganic arsenic was between 32 and 72 percent of total arsenic (Index calculation).', F], 'A specification on total arsenic does not fix the inorganic fraction.'),
      ],
      answers: [
        para(['Yes: drier water management lowered grain arsenic and raised grain cadmium in a field study.', SE]),
        para(['Yield fell by 25 to 40 percent under the driest conditions; nutrition and sensory effects in rice protein were not measured.', SE]),
        para('Costs and failure modes for rice protein controls are undocumented.', ['A failure mode visible in the data is reliance on total arsenic, which leaves the inorganic share unknown.', F]),
      ],
    }),
    section('testing', {
      overview: [
        para(['FDA measured total arsenic and its species in the powder, with a 10 µg/kg detection limit and 80 µg/kg quantification limit for total arsenic and 2 and 12 µg/kg for inorganic arsenic in this product group.', F], ['Where total arsenic was below the speciation threshold, FDA did not speciate and used half the total arsenic value as the inorganic arsenic value.', F]),
        para(['A brown rice protein result reported as below detection without a printed limit shows nothing about how low the metals were.', H], 'A useful certificate names the accredited laboratory, the method, the quantification limit for each metal, inorganic arsenic by speciation and the lot tested.'),
      ],
      answers: [
        para('Sampling should be lot-based; a single retail product describes that product.', ['Each FDA row is one product sample.', F]),
        para(['Inorganic arsenic needs a speciation method with a quantification limit well below the decision level; FDA\'s was 12 µg/kg in this product group.', F], ['Cadmium was measured by atomic absorption in the endosperm protein study.', HO]),
        para(['A non-detect means below the stated limit; substituted half-limit values are not measurements.', F, H], ['The 2017 GEMS/Food lead results print no detection or quantification limit; the 2014 results print 1 and 4 µg/kg.', G]),
      ],
    }),
    section('procurement', {
      overview: [
        para('A buyer should ask for the testing laboratory\'s name and ISO/IEC 17025 accreditation, the report number for each certificate, the quantification limit for each metal, inorganic arsenic by speciation rather than total arsenic alone, and results for the lot being bought.', ['These answer the gaps in the published evidence: substituted arsenic values, missing detection limits and results without growing origin.', F, H, G]),
        para(['Ask whether the protein is made from brown rice or milled rice, because the label comparison points to more inorganic arsenic in brown rice protein.', F], ['For a product sold in California at a 30 g serving, the lead concentration that reaches the 0.5 µg/day level is 16.7 µg/kg, so a lead quantification limit well below that is needed.', OL], ['All 22 GEMS/Food lead results were above that figure (Index calculation).', G], 'Choosing a specification at such a figure is a policy decision for the buyer, not a value the evidence sets.'),
      ],
      answers: [
        para('A buyer should request rice type (brown or milled), growing origin, laboratory, accreditation, report number, quantification limits and lot-level inorganic arsenic, cadmium, lead and mercury.', ['No published rice protein result supplies growing origin.', F, G]),
        para(['EU rice rows and China\'s rice powder rows are legal requirements for those foods; applying them to rice protein is a specification choice.', EU, CN], ['A per-serving target from California\'s levels is also a policy choice.', OL]),
        para('A change of rice type or origin, processor, laboratory or quantification limit, or a lot well above earlier lots, should trigger requalification.', ['Inorganic arsenic varied sixfold across quantified FDA samples.', F]),
      ],
    }),
    section('product', {
      overview: [
        para(['FDA calculated inorganic arsenic per serving using each product\'s reference serving, 18 to 85 g for the rice protein powder category; the category averaged 1.9 µg per serving, ranging from 0.1 to 5.7 µg.', F], ['At a 30 g scoop, the median inorganic arsenic of 47 µg/kg gives 1.41 µg, an Index calculation; the Index does not yet hold California\'s inorganic arsenic level.', F, OA]),
        para(['For cadmium, the endosperm protein mean of 0.14 mg/kg gives 4.2 µg in a 30 g scoop, against California\'s oral cadmium level of 4.1 µg/day.', HO, OC], 'That is a mean of five batches with a wide spread, for endosperm protein rather than brown rice protein.'),
        para(['For lead, the GEMS/Food median of 241 µg/kg gives 7.2 µg in a 30 g scoop and the range 3.3 to 13.4 µg, against California\'s lead level of 0.5 µg/day (Index calculations on dry-weight results).', G, OL], 'Whether a product needs a warning depends on its labeled serving, daily use and the law\'s other provisions.'),
      ],
      answers: [
        para('A finished-product estimate scales with the share of rice protein in the formula, the serving size and the other ingredients.', ['FDA\'s reference servings for the category ran from 18 to 85 g.', F]),
        para('Daily use, several servings a day and use by children change exposure in proportion to the amount eaten.', ['FDA\'s infant rice cereal action level of 100 µg/kg shows how intended population changes the reference used.', FI]),
        para('Any intake conclusion needs measurement of the finished product and a separate exposure assessment.', ['The FDA samples date from 2012 to 2013 and the GEMS/Food lead results from 2014 and 2017, so they may not represent current products.', F, G]),
      ],
    }),
    section('assessment', {
      overview: [
        para(['The EU sets cadmium at 0.15 mg/kg for rice and inorganic arsenic at 0.15 mg/kg for non-parboiled milled rice and 0.25 mg/kg for parboiled rice, husked rice and rice flour; none of these rows names rice protein.', EU], ['California sets lead at 0.5 µg/day and oral cadmium at 4.1 µg/day.', OL, OC], ['FDA\'s inorganic arsenic action level of 100 µg/kg applies to infant rice cereal, not rice protein.', FI], ['China GB 2762-2022 has no protein powder row; its nearest rows are rice powder at 0.2 mg/kg cadmium and 0.2 mg/kg inorganic arsenic, brown rice at 0.35 mg/kg inorganic arsenic, grains at 0.2 mg/kg lead and 0.02 mg/kg total mercury.', CN], ['GB 2762-2025 replaced it from 2026-09-02.', CN25]),
        para(['For orientation only, the highest FDA rice protein sample, 152 µg/kg inorganic arsenic, is above the EU milled-rice row but below the rice flour and China rice powder rows, and 16 of the 22 GEMS/Food lead results are above China\'s 0.2 mg/kg grain row.', F, G, EU, CN], ['The occurrence evidence comes from FDA, WHO GEMS/Food monitoring, an endosperm protein study, a Canadian survey and a Hungarian survey; a rice bran review, a silicon experiment and a water management study inform pathways and controls.', F, G, HO, C, H, S, Z, SE], 'The EU 2023/915 lead rows for cereals and food supplements are not yet transcribed in the Index.'),
      ],
      answers: [
        para(['No regulatory row names rice protein; the EU rice and rice flour rows, California\'s per-day levels and China\'s rice powder rows are the nearest instruments.', EU, OL, OC, CN]),
        para(['Every record that reports rice protein separately was read and extracted: five occurrence sources, with three context sources for pathways and controls.', F, G, HO, C, H, S, Z, SE]),
        para('Unresolved: lead outside the Americas, brown rice protein cadmium, growing origin and measured processing effects.', ['This version adds the page from the Index records available on 2 November 2026.', F]),
      ],
      faqs: [
        q('How much arsenic is in rice protein?', para(['In FDA\'s US retail sampling, 17 of 19 rice protein samples had quantified inorganic arsenic from 25 to 152 µg/kg, median 47 µg/kg (Index calculation).', F], 'These samples date from 2012 to 2013.')),
        q('Why does rice protein contain arsenic?', para(['The rice plant takes up arsenic from flooded paddy soil, and arsenic concentrates in the bran and germ that brown rice keeps.', S], 'Rice protein is made from that grain.')),
        q('Is inorganic arsenic or total arsenic the right test for rice protein?', para(['Inorganic arsenic: in FDA\'s samples it was between 32 and 72 percent of total arsenic, so a total figure does not give the inorganic share.', F], ['Rice limits are set for inorganic arsenic.', EU])),
        q('Does rice protein contain cadmium?', para(['Rice endosperm protein averaged 0.14 mg/kg cadmium across five batches, and a Canadian survey found rice-based protein powders highest in cadmium among the protein types it tested.', HO, C], 'No quantified result exists for brown rice protein.')),
        q('Does rice protein contain lead?', para(['Yes: all 22 rice protein powders in WHO GEMS/Food results from the Americas had quantified lead, 110 to 445 µg/kg, median 241 µg/kg (Index calculation).', G], 'Ask for lead with a stated quantification limit on every lot.')),
        q('Does rice protein contain mercury?', para(['One brown rice protein powder in a Canadian survey had 0.022 ppm mercury, the highest value in that survey.', C])),
        q('Is brown rice protein higher in arsenic than other rice protein?', para(['In a small FDA comparison, yes: 37 to 99 µg/kg inorganic arsenic in brown rice protein against 25 to 47 µg/kg in rice protein where quantified.', F], 'The comparison is tentative.')),
        q('Is rice protein higher in arsenic than pea protein?', para('Pea protein has no arsenic data, so they cannot be compared.', ['Rice protein\'s inorganic arsenic is documented in 17 samples.', F], ['For lead, the two measured pea powders had 22.2 and 22.5 µg/kg, below all 22 GEMS/Food rice protein results, though from a different survey, country and year.', RG, G], 'The pea protein page sets out that evidence.')),
        q('Which country grows the lowest-arsenic rice for protein?', para(['No rice protein result names the growing region, so China, Vietnam, the USA and Canada cannot be compared for rice protein.', F, C, HO], 'Rice grain origin data are on [[ingredients/rice]] but do not convert directly to protein.')),
        q('Can processing remove arsenic or cadmium from rice protein?', para(['Acid washing is used to remove cadmium during extraction, but its effect was not measured.', HO], 'No arsenic removal step for rice protein has been measured.')),
        q('How do I check a rice protein against California Prop 65?', para(['Multiply concentration by serving weight: 241 µg/kg lead × 30 g = 7.2 µg, against the 0.5 µg/day lead level, and 0.14 mg/kg cadmium × 30 g = 4.2 µg, against the 4.1 µg/day cadmium level.', G, OL, HO, OC], ['The Index does not yet hold the inorganic arsenic level.', OA])),
        q('What does "not detected" mean on a rice protein certificate?', para(['It means below the laboratory limit; one survey reported a brown rice protein as below detection without printing the limit.', H], ['FDA replaced non-speciated results with half the total arsenic value, which is a substitute, not a measurement.', F])),
        q('What should a rice protein supplier\'s test report include?', para('The accredited laboratory\'s name and ISO/IEC 17025 status, the report number, the method, quantification limits, inorganic arsenic by speciation, cadmium, lead and mercury, the rice type and the lot tested.', ['The published evidence lacks growing origin and lead results from outside the Americas.', F, G])),
        q('Does the EU limit metals in rice protein?', para(['No row names rice protein; rice rows set cadmium at 0.15 mg/kg and inorganic arsenic at 0.15 or 0.25 mg/kg depending on the rice form.', EU])),
        q('Does China set a limit for rice protein?', para(['GB 2762-2022 has no protein powder row; rice powder is limited to 0.2 mg/kg cadmium and 0.2 mg/kg inorganic arsenic.', CN], ['The 2025 edition replaced it from 2026-09-02.', CN25])),
        q('Does FDA limit arsenic in rice protein?', para(['No: FDA\'s 100 µg/kg inorganic arsenic action level applies to infant rice cereal.', FI])),
      ],
    }),
  ],
};

const out = writeAuthored('rice-protein', record);
console.log(JSON.stringify(out));
