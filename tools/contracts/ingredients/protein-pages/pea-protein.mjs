// Authored synthesis for /ingredients/pea-protein (orders HMI-PROTEIN-PEA-RICE-1, HMI-PROTEIN-REBUILD-1).
// Every number is from a cited source record or is labelled arithmetic on one.
import { para, section, writeAuthored } from './author.mjs';

const R = 'ring2021-ireland-protein-powders-metals';
const H = 'horvath2025-hungary-protein-powders-metals';
const CL = 'cleanlabel2025-protein-powder-heavy-metals';
const EU = 'eu-2023-915-contaminants-maximum-levels';
const OL = 'oehha-lead-prop65-listing';
const OC = 'oehha-cadmium-prop65-madl-2001';
const CTZ = 'fda-ctz-Pb-babyfood-2025';
const CN = 'usda-fas2023-china-gb-2762-2022-translation';
const CN25 = 'chinanhc2025-gb-2762-contaminants';
const K = 'kolhe2025-protein-powders-lead-cadmium-review';
const B = 'bandara2020-protein-powder-heavy-metals';
const SR = 'sriranjani2025-whey-vegan-protein-powders-icpms';
const M = 'mattila2018-finland-plant-protein-products-nutrients';

const L = 'lopezcalabozo2025-spain-vegetable-protein-concentrates-minerals';
const G4 = 'fda-grn804-pea-protein-manufacturer-batches';
const G5 = 'fda-grn851-pea-protein-manufacturer-batches';
const G7 = 'fda-grn788-pea-protein-manufacturer-batches';

// Manufacturer figures below are from FDA GRAS notices 788, 804 and 851 (manufacturer
// batch data, notifier and product names withheld): 15 results across six grades from
// three manufacturers. Ranges and counts over them are Index calculations.
const q = (question, ...paras) => ({ q: question, a: paras.length === 1 ? paras[0] : { ...paras[0], text: paras.map(p => p.text).join(' '), source_keys: [...new Set(paras.flatMap(p => p.source_keys))], citation_spans: paras.flatMap(p => p.citation_spans), ...(paras.some(p => p.citation_omission_reason) ? { citation_omission_reason: paras.find(p => p.citation_omission_reason).citation_omission_reason } : {}) } });

const record = {
  description: 'Lead, cadmium, mercury and arsenic evidence for pea protein isolate and concentrate: four independently tested products, manufacturer batch data submitted to FDA, applicable limits and what a buyer should ask a supplier.',
  lede: 'Four independently tested pea protein products and 15 manufacturer batch results carry the published metal evidence for pea protein: cadmium was found in most results, lead at low levels, and inorganic arsenic has never been measured.',
  quick_read: {
    ...para(['Independent tests of four pea protein products found lead and cadmium in two and neither in the other two.', R, L], ['Manufacturer tests submitted to FDA found cadmium in all 15 batches.', G4, G5, G7], 'Inorganic arsenic is unmeasured.'),
    facets: [
      { label: 'Metals of concern', ...para(['Cadmium is the most consistent finding: 1.0 to 80 µg/kg in manufacturer batches and 15.4 and 40.6 µg/kg in two retail powders.', G4, G5, G7, R], ['Inorganic arsenic was never measured.', R, L, G4, G5, G7]) },
      { label: 'Main drivers', ...para(['Cadmium differed more than twofold between two retail powders at nearly equal lead.', R], 'Growing origin has no published data.') },
      { label: 'Practical framing', ...para(['Every cadmium result is below the EU limit of 0.10 mg/kg for proteins from pulses.', EU, R, G4, G5, G7], 'Ask for inorganic arsenic, lead and cadmium on each lot.') },
    ],
  },
  section_headings: {
    summary: 'Pea protein overview',
    identity: 'What counts as pea protein',
    occurrence: 'Heavy metal contamination profile of pea protein',
    pathways: 'How metals reach pea protein',
    variation: 'Which pea protein sources measured lower',
    processing: 'Processing effects and derivatives',
    controls: 'Mitigation for pea protein',
    tradeoffs: 'Trade-offs and limits of controls',
    testing: 'Testing pea protein for metals',
    procurement: 'Buying and verifying pea protein',
    product: 'Exposure from pea protein',
    assessment: 'Requirements and evidence review',
  },
  universal_faqs: { title: 'Pea protein FAQs', aliases: [] },
  sections: [
    section('summary', {
      overview: [
        para(['Four pea protein products have independent single-product metal results: two retail powders bought in Ireland in 2016 and 2017 had lead at 22.2 and 22.5 µg/kg and cadmium at 40.6 and 15.4 µg/kg.', R], ['Two unnamed concentrate brands tested in Spain had neither lead nor cadmium detected, at limits printed without a unit.', L]),
        para(['Manufacturer batch data submitted to FDA with three GRAS notices add 15 results for six isolate and concentrate grades from three manufacturers; these are the manufacturers\' own tests, not independent measurements.', G4, G5, G7], ['Cadmium was quantified in all 15 at 1.0 to 80 µg/kg, lead in 11 at 10 to 40 µg/kg, and total arsenic and mercury in none (Index calculations).', G4, G5, G7]),
        para(['Inorganic arsenic has not been measured in any pea protein product, independent or manufacturer, and no result names where the peas were grown.', R, L, G4, G5, G7], 'For a buyer, that makes lot testing for inorganic arsenic, lead and cadmium the decision point.'),
      ],
      answers: [
        para(['Cadmium and lead are the supported concerns: both were quantified in two independently tested retail powders and in most manufacturer batches.', R, G4, G5, G7], ['Inorganic arsenic is unmeasured, and total arsenic appears only as manufacturer results below their reporting limits.', G4, G5, G7]),
        para(['Lot testing for inorganic arsenic, lead and cadmium deserves priority, because two retail powders differed more than twofold in cadmium at nearly equal lead.', R], 'Origin-based sourcing cannot be prioritized on current evidence.'),
        para(['The gaps that limit decisions are the absence of inorganic arsenic data, the absence of growing-origin data and the small number of independently tested products.', R, L, H]),
      ],
    }),
    section('identity', {
      overview: [
        para('This page covers pea protein isolate and pea protein concentrate, the protein fractions made from dried peas and sold as powder or used as an ingredient.', ['The independent evidence is two retail powders described as pea protein and two concentrate brands; the manufacturer evidence covers four isolate grades and two concentrate grades.', R, L, G4, G5, G7]),
        para(['Blends that list pea alongside rice, pumpkin seed or other proteins are kept separate, because a blend result cannot be assigned to one protein.', H], 'Finished protein powders and mixed formulas are covered on the protein powder product page, and rice-derived protein on [[ingredients/rice-protein]].'),
      ],
      answers: [
        para(['The page covers protein isolated or concentrated from dried peas, sold as powder; the independently tested products are retail powders and commercial concentrates.', R, L]),
        para('Isolate, concentrate, flavored powders and blends are distinct materials: an isolate holds more protein than a concentrate, and flavored or blended powders add other ingredients.', ['One manufacturer\'s notice reports both an isolate of at least 85% protein and a concentrate of at least 65% protein.', G4]),
        para('Results for whole peas, other pulses or mixed plant powders do not transfer to pea protein, because protein isolation changes which part of the seed remains.', ['No study in the Index measured metals in peas before and after protein isolation.', R, L, H]),
      ],
    }),
    section('occurrence', {
      overview: [
        para(['The table lists every pea protein result in the Index: 100 rows from five sources.', R, L, G4, G5, G7], ['Two are independent studies; three are FDA GRAS notices whose results are the manufacturers\' own batch tests, marked as manufacturer tests in the table.', R, L, G4, G5, G7], 'Manufacturer rows do not set a reference level for other rows.'),
        para(['Independent results: lead 22.2 and 22.5 µg/kg and cadmium 40.6 and 15.4 µg/kg in two Irish retail powders, and lead and cadmium not detected in two Spanish concentrate brands.', R, L], ['Manufacturer results: cadmium 1.0 to 80 µg/kg in 15 of 15 batches, lead 10 to 40 µg/kg in 11 of 15, with total arsenic below 10 to 100 µg/kg and mercury below 2 to 10 µg/kg in all (Index calculations).', G4, G5, G7]),
      ],
      answers: [
        para(['Lead, cadmium and mercury were measured independently with other elements, and lead, cadmium, total arsenic and mercury by the manufacturers.', R, L, G4, G5, G7], ['Inorganic arsenic was not measured in any pea protein product.', R, L, G4, G5, G7]),
        para(['Each independent value is one retail product or brand: lead 22.2 and 22.5 µg/kg, cadmium 40.6 and 15.4 µg/kg, mercury 4.3 and below 0.2 µg/kg, and two brands with lead and cadmium not detected.', R, L], ['Manufacturer batch results ran from 10 to 40 µg/kg lead where quantified and 1.0 to 80 µg/kg cadmium.', G4, G5, G7]),
        para(['Inorganic arsenic is unassessed for pea protein, and total arsenic appears only as manufacturer non-detects.', G4, G5, G7], ['The Spanish non-detects cannot be bounded because the detection limits were printed without a unit.', L]),
      ],
    }),
    section('pathways', {
      overview: [
        para(['No study in the Index traces how lead or cadmium reach pea protein, whether through the soil, irrigation water, processing equipment or packaging.', R, L, H]),
        para(['A US market screen of 160 protein powders found that plant-based powders averaged three times the lead and five times the cadmium of whey-based powders, but it did not say which plant proteins those powders contained.', CL], 'That pattern fits a plant source for both metals, but it is an inference, not a measured pathway for pea protein.'),
      ],
      answers: [
        para(['No study in the Index measured root uptake or other biological pathways for pea protein.', R, L]),
        para(['No study in the Index measured contamination from agricultural inputs, processing, equipment or packaging for pea protein.', R, L]),
        para(['The plant-protein attribution is inferred from a market screen of unspecified plant powders; it is not a measured result for pea protein.', CL]),
      ],
    }),
    section('variation', {
      overview: [
        para(['Among independently tested products, the two Irish powders had nearly equal lead, 22.2 and 22.5 µg/kg, but cadmium differed more than twofold, 40.6 against 15.4 µg/kg; the two Spanish concentrate brands had neither metal detected.', R, L], 'The lowest observed independent results are the two Spanish brands, but their limits are printed without a unit, so how low they were is unknown.'),
        para(['Within one manufacturer\'s notice, the concentrate grade had more cadmium than the isolate grade, 41 and 15 µg/kg against 9.6, 8.1 and 1.0 µg/kg.', G4], ['Across another manufacturer\'s three isolate grades, cadmium ran from 40 to 80 µg/kg, with the highest lot in the third grade.', G5], 'These are manufacturer tests within single notices, so they show how grades of one producer compared, not which grade is lower on the market.'),
        para(['No result reports pea protein by the country where the peas were grown, so China, Vietnam, the USA and Canada cannot be compared as origins for any metal.', R, L, G4, G5, G7], ['Pea blends produced in the USA, Canada, Belgium and elsewhere in the EU were all below an unprinted detection limit, which cannot rank them, and production country is not growing origin.', H], 'Resolving this needs lot results for pea protein linked to the growing region, measured with a stated quantification limit.'),
      ],
      answers: [
        para(['No pea protein result is linked to growing origin, growing conditions, variety or harvest period.', R, L, G4, G5, G7]),
        para(['The variation observed is between products and grades: more than twofold in cadmium between two retail powders, and from 1.0 to 80 µg/kg cadmium across manufacturer batches.', R, G4, G5, G7], 'Within-lot variation is unmeasured.'),
        para('No comparison supports an origin or supplier preference.', ['Generalizing from four independently tested products to a country or supplier would be unjustified.', R, L]),
      ],
      questions: [
        q('Which pea protein measured lowest in each metal?', para(['Among independent results, the two Spanish concentrate brands had lead and cadmium not detected; of the Irish powders, the second was lower in cadmium and mercury, 15.4 µg/kg and below 0.2 µg/kg, against 40.6 and 4.3 µg/kg.', L, R], ['In manufacturer data, the lowest cadmium was 1.0 µg/kg in a blend of isolate batches.', G4], 'Four independent products from two markets do not show that any source is reliably lower.')),
        q('Can country of origin pick a lower-metal pea protein?', para(['Not yet: no published pea protein result names the growing region, and the blends with a stated production country were below an unprinted detection limit.', R, L, H], 'Origin-linked lot results are the evidence that would answer it.')),
      ],
    }),
    section('processing', {
      overview: [
        para(['No study in the Index compares lead, cadmium, arsenic or mercury in peas before and after protein isolation.', R, L, H], ['One manufacturer\'s isolate grade had less cadmium than its concentrate grade made from the same extraction, 1.0 to 9.6 µg/kg against 15 and 41 µg/kg.', G4], 'Whether isolation removes cadmium is suggested by that one notice but not measured as a mass balance.'),
        para(['The independently tested powders are finished retail products whose processing the studies do not describe.', R, L], 'Flavored and blended powders add ingredients that can change the result, so their evidence is kept on the protein powder product page.'),
      ],
      answers: [
        para(['No processing step has a measured before-and-after effect on metals in pea protein in the Index.', R, L, H]),
        para('Isolate and concentrate are distinct fractions of the pea seed.', ['In one manufacturer\'s data, the isolate carried less cadmium than the concentrate.', G4]),
        para('Removal, redistribution and concentration cannot be distinguished without a before-and-after mass balance, which no study reports.', ['No product has paired raw-material results.', R, G4]),
      ],
    }),
    section('controls', {
      overview: [
        para(['No measured way to lower lead or cadmium in pea protein is in the Index, at the farm or in processing.', R, L, H], 'The control that can be verified today is testing each lot of finished protein and rejecting lots above the buyer\'s specification.'),
        para('Testing detects contamination; it does not remove it.', ['A test is useful only when its quantification limit sits well below the level that matters, which the blend survey without a printed detection limit illustrates.', H], ['The manufacturer notices set specifications such as below 0.2 mg/kg for each metal, well above the results they report.', G5]),
      ],
      answers: [
        para(['No prevention, mitigation or remediation measure has been evaluated for pea protein in the Index.', R, L, H]),
        para('With no evaluated control, there is no stage, condition or comparator to report.', ['Lot testing is a detection step, not a tested reduction.', H]),
        para(['There is no field or commercial evidence for a control; verification rests on lot testing with a stated quantification limit.', H]),
      ],
    }),
    section('tradeoffs', {
      overview: [
        para(['A lead-only specification would not have separated the two Irish pea powders, because their lead was nearly equal while their cadmium differed more than twofold.', R], 'Metals do not move together, so a lot that passes one limit says little about the others unless each is tested.'),
        para(['No study in the Index reports effects of any control on protein content, yield, taste, stability or waste streams for pea protein.', R, L, H]),
      ],
      answers: [
        para('No intervention for pea protein has been tested, so no shift of contamination to another metal or by-product is documented.', ['Two retail products show that lead and cadmium can diverge between sources.', R]),
        para(['No effects on nutrition, yield, sensory quality, stability or waste streams were measured.', R, L, H]),
        para('Costs, constraints and failure modes of controls for pea protein are unknown.', ['The documented failure modes are non-detects reported without a detection limit or without its unit.', H, L]),
      ],
    }),
    section('testing', {
      overview: [
        para(['The Irish study digested about 0.5 g of powder with nitric and hydrochloric acid and measured it by sector-field ICP-MS, with stated quantification limits such as 0.2 µg/kg for mercury; it did not measure arsenic.', R], ['The Spanish study used ICP-MS after nitric acid digestion and did not measure arsenic or mercury.', L]),
        para(['The manufacturer notices used ICP-MS or national standard methods for total arsenic, and none speciated inorganic arsenic.', G4, G5, G7], 'A useful certificate names the accredited laboratory, the method, the quantification limit for each metal and the lot tested, and reports inorganic arsenic separately from total arsenic.'),
      ],
      answers: [
        para('Sampling should be lot-based: a single product analysis describes that product and not a supplier\'s production.', ['Each independent pea result in the Index is one retail product or brand.', R, L]),
        para(['Lead, cadmium and mercury need a method with quantification limits well below the decision level; the Irish study used sector-field ICP-MS with limits as low as 0.2 µg/kg for mercury.', R], 'Inorganic arsenic needs a speciation method.'),
        para(['A non-detect establishes only that the result was below the stated limit; without a printed limit or unit it establishes nothing about how low the metal was.', H, L], ['Inorganic arsenic remains untested in pea protein.', R, L, G4, G5, G7]),
      ],
    }),
    section('procurement', {
      overview: [
        para('A buyer should ask for the name of the testing laboratory and its ISO/IEC 17025 accreditation, the report number for each certificate, the quantification limit for each metal, inorganic arsenic rather than total arsenic alone, and results for the lot being bought.', ['These requests answer the gaps in the published evidence: the inorganic arsenic gap, the missing detection limits and the few independently tested products.', R, L, H]),
        para(['For a product sold in California at a 30 g serving, the lead concentration that reaches the 0.5 µg/day level is 16.7 µg/kg (0.5 ÷ 0.030 kg), so a lead quantification limit well below that is needed; at a 10 g serving the figure is 50 µg/kg.', OL], 'Choosing a specification at or below such a figure is a policy decision for the buyer, not a value set by the evidence.'),
      ],
      answers: [
        para('A buyer should request the growing origin of the peas, whether the material is isolate or concentrate, the laboratory, accreditation, report number, quantification limits and lot-level results for lead, cadmium, mercury and inorganic arsenic.', ['No published pea protein result supplies growing origin or inorganic arsenic.', R, L, G4, G5, G7]),
        para(['The EU maximum level of 0.10 mg/kg cadmium for proteins from pulses is a legal requirement where it applies.', EU], ['A per-serving lead target derived from California\'s 0.5 µg/day level is a policy choice that depends on the serving size.', OL]),
        para('A change of pea origin, processor, isolate or concentrate, laboratory or quantification limit, or a lot result well above earlier lots, should trigger requalification.', ['Manufacturer cadmium results ranged from 1.0 to 80 µg/kg across batches.', G4, G5, G7]),
      ],
    }),
    section('product', {
      overview: [
        para(['The Irish study reported the labeled serving of each product: 30 g for the first pea powder and 10 g for the second.', R], ['At those servings the powders supply 0.666 and 0.225 µg of lead and 1.218 and 0.154 µg of cadmium, Index calculations from the study values; California\'s levels are 0.5 µg/day for lead and 4.1 µg/day for cadmium.', R, OL, OC]),
        para(['At the highest manufacturer lead result, 40 µg/kg, a 30 g serving would supply 1.2 µg of lead, an Index calculation.', G4, OL], 'Two or three scoops a day, or pea protein used as one ingredient in a blend, change these figures in proportion to the amount eaten.', ['The Irish study assessed intake at one to three servings a day for a 70 kg adult.', R]),
      ],
      answers: [
        para('A finished-product estimate scales with the share of pea protein in the formula, the serving size and the other ingredients.', ['The Irish study\'s labeled servings were 30 g and 10 g.', R]),
        para(['Consumption frequency matters: the Irish study used one to three servings a day for a 70 kg adult.', R], 'Children, pregnant consumers and heavy users need their own intake assumptions.'),
        para('Any claim about a finished product or a population\'s intake requires measurement of that product and a separate exposure assessment.', ['Four independently tested products do not represent the market.', R, L]),
      ],
    }),
    section('assessment', {
      overview: [
        para(['The EU sets a cadmium maximum level of 0.10 mg/kg for proteins from pulses and 1.0 mg/kg for food supplements in general.', EU], ['California sets a lead level of 0.5 µg/day and an oral cadmium level of 4.1 µg/day.', OL, OC], ['FDA Closer to Zero action levels cover foods for babies and young children, not protein powders or isolates.', CTZ], ['China GB 2762-2022 has no protein powder row; its nearest rows are beans, at 0.2 mg/kg lead and 0.2 mg/kg cadmium.', CN], ['GB 2762-2025 replaced the 2022 edition from 2026-09-02.', CN25]),
        para(['The independent occurrence evidence is one Irish study of two pea powders and one Spanish study of two concentrate brands; a Hungarian survey reports pea blends below an unprinted detection limit.', R, L, H], ['Three FDA GRAS notices add manufacturer batch data, which the Index labels as manufacturer tests and keeps out of reference levels.', G4, G5, G7], ['A US market screen, a review, a risk assessment, a whey and vegan powder study and a Finnish plant protein study were read and do not report pea protein separately.', CL, K, B, SR, M]),
      ],
      answers: [
        para(['The EU 0.10 mg/kg cadmium level for proteins from pulses applies to pea protein; the EU 1.0 mg/kg supplement level applies where it is sold as a food supplement.', EU], ['California\'s per-day levels for lead and cadmium apply to products sold there.', OL, OC], ['China\'s bean rows are the nearest GB 2762 entries.', CN]),
        para(['Every record that names pea protein was read: two independent studies and three manufacturer notices give pea-specific results, and six other records do not report pea protein separately.', R, L, G4, G5, G7, H, CL, K, B, SR, M]),
        para('Unresolved: inorganic arsenic, growing origin, independent lot data, processing effects and any reduction measure.', ['This version adds the Spanish study and the three manufacturer notices from the Index records available on 3 November 2026.', L, G4, G5, G7]),
      ],
      faqs: [
        q('Does pea protein contain lead?', para(['Two independently tested retail powders contained 22.2 and 22.5 µg/kg lead, and two concentrate brands had none detected.', R, L], ['Manufacturer tests quantified lead in 11 of 15 batches at 10 to 40 µg/kg.', G4, G5, G7])),
        q('Does pea protein contain cadmium?', para(['Yes: two retail powders had 40.6 and 15.4 µg/kg, and manufacturer batches 1.0 to 80 µg/kg.', R, G4, G5, G7], ['All are below the EU maximum level of 0.10 mg/kg (100 µg/kg) for proteins from pulses.', EU])),
        q('Is arsenic a concern in pea protein?', para(['It is unknown: inorganic arsenic has not been measured in any pea protein product.', R, L, G4, G5, G7], ['Total arsenic appears only in manufacturer tests, all below reporting limits of 10 to 100 µg/kg.', G4, G5, G7], 'Ask for inorganic arsenic on each lot.')),
        q('Is pea protein lower in metals than whey protein?', para(['In the one study that measured both, both pea powders were above the whey median for lead, 8.6 µg/kg across 27 whey powders, and one pea powder had more cadmium than any whey powder.', R], 'With two pea products this is a tentative comparison, not a rule.')),
        q('Is pea protein lower in metals than rice protein?', para(['For lead, the one study that measured both found none detected in two pea protein brands and 175.40 ppb in one of two rice protein brands.', L], 'Inorganic arsenic cannot be compared, because it has not been measured in pea protein; see [[ingredients/rice-protein]] for the rice evidence.')),
        q('Are manufacturer test results independent?', para(['No: the GRAS notice results are tests run or commissioned by the manufacturers and submitted to FDA with a GRAS notice, not measurements by an independent laboratory or agency.', G4, G5, G7], 'The Index shows them as manufacturer tests and does not name the companies or products.')),
        q('Which country grows the lowest-metal peas for protein?', para(['No published pea protein result names the growing region, so China, Vietnam, the USA and Canada cannot be compared.', R, L, G4, G5, G7], 'Origin-linked lot results would answer it.')),
        q('Does organic pea protein have fewer metals?', para(['No pea-specific data exist; across a US market screen of protein powders of all types, organic products averaged three times the lead and twice the cadmium of non-organic ones.', CL], 'That screen did not separate pea protein.')),
        q('Do flavored pea protein powders carry more metals?', para(['Across all protein powders in a US market screen, chocolate-flavored products averaged four times the lead and 110 times the cadmium of vanilla-flavored products.', CL], 'No study separates flavored pea protein.')),
        q('How do I check a pea protein against California Prop 65?', para(['Multiply the lead concentration by the serving weight: 22.2 µg/kg × 0.030 kg = 0.666 µg per 30 g serving, against the 0.5 µg/day level.', R, OL], 'Warning requirements depend on more than this arithmetic.')),
        q('What does "not detected" mean on a pea protein certificate?', para('It means the result was below the laboratory\'s limit, not that the metal is absent.', ['One survey reported pea blends as below detection without printing the limit, and another printed limits without a unit, so neither shows how low the metal was.', H, L])),
        q('What should a pea protein supplier\'s test report include?', para('The accredited laboratory\'s name and ISO/IEC 17025 status, the report number, the method, the quantification limit for each metal, inorganic arsenic as well as total arsenic, and the lot tested.', ['The published evidence lacks inorganic arsenic and, in two studies, usable detection limits.', R, H, L])),
        q('Does the EU limit metals in pea protein?', para(['Yes for cadmium: 0.10 mg/kg for proteins from pulses, and 1.0 mg/kg for food supplements in general.', EU], 'The Index has not yet transcribed the EU lead rows that may apply.')),
        q('Does China set a limit for pea protein?', para(['GB 2762-2022 has no protein powder row; beans are limited to 0.2 mg/kg lead and 0.2 mg/kg cadmium.', CN], ['The 2025 edition replaced it from 2026-09-02, and its bean rows are not yet in the Index.', CN25])),
        q('Does FDA Closer to Zero cover pea protein?', para(['No: its action levels cover foods for babies and young children.', CTZ])),
      ],
    }),
  ],
};

const out = writeAuthored('pea-protein', record);
console.log(JSON.stringify(out));
