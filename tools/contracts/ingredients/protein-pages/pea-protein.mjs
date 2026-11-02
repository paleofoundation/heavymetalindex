// Authored synthesis for /ingredients/pea-protein (order HMI-PROTEIN-PEA-RICE-1).
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

const q = (question, ...paras) => ({ q: question, a: paras.length === 1 ? paras[0] : { ...paras[0], text: paras.map(p => p.text).join(' '), source_keys: [...new Set(paras.flatMap(p => p.source_keys))], citation_spans: paras.flatMap(p => p.citation_spans), ...(paras.some(p => p.citation_omission_reason) ? { citation_omission_reason: paras.find(p => p.citation_omission_reason).citation_omission_reason } : {}) } });

const record = {
  description: 'Lead, cadmium, mercury and arsenic evidence for pea protein isolate and concentrate, with labeled-serving arithmetic, applicable limits and what a buyer should ask a supplier.',
  lede: 'Two retail pea protein powders carry the only published single-product metal results for pea protein: both contained lead and cadmium, and neither was tested for arsenic.',
  quick_read: {
    ...para(['Two retail pea protein powders are the only pea protein products with published single-product metal results, and both contained lead and cadmium.', R], 'Arsenic and growing origin have no published data.'),
    facets: [
      { label: 'Metals of concern', ...para(['Lead and cadmium were measured in both pea powders and mercury was quantified in one.', R], ['Arsenic was not measured.', R]) },
      { label: 'Main drivers', ...para(['One powder had more than twice the cadmium of the other at nearly equal lead.', R], 'Origin, cultivar and isolation process have no published comparison.') },
      { label: 'Practical framing', ...para(['At its labeled 30 g serving, one powder supplies more lead than the California 0.5 µg/day level.', R, OL], 'Test lots for lead, cadmium and inorganic arsenic.') },
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
        para(['Two retail pea protein powders, bought in Ireland in 2016 and 2017, are the only pea protein products in the Index with published single-product metal results.', R], ['Both carried lead, at 22.2 and 22.5 µg/kg, and cadmium, at 40.6 and 15.4 µg/kg; mercury was 4.3 µg/kg in one and below the 0.2 µg/kg quantification limit in the other.', R], ['Arsenic was not measured.', R]),
        para(['Lead matters most for a powder eaten daily: at the first powder\'s labeled 30 g serving, its lead content works out to 0.666 µg, above California\'s 0.5 µg/day lead level, while the second powder\'s labeled 10 g serving works out to 0.225 µg.', R, OL], 'These are calculations on two products, not a market estimate.', ['Both cadmium results are below the EU maximum level of 0.10 mg/kg for proteins from pulses.', R, EU]),
        para(['The decisions that matter most for a buyer are which lot to accept and which tests to require, and the evidence limits both.', R, H], 'No pea protein result reports arsenic or the country where the peas were grown, so lead, cadmium and inorganic arsenic need to be measured on the lot itself.'),
      ],
      answers: [
        para(['Lead and cadmium are the supported concerns: both were present in the two pea protein powders measured, and mercury was quantified in one of them.', R], ['Arsenic is unassessed because it was not measured.', R]),
        para(['Lot testing for lead, cadmium and inorganic arsenic deserves priority, because the two measured powders differed by more than twofold in cadmium at nearly equal lead.', R], 'Origin-based sourcing cannot be prioritized on current evidence.'),
        para(['The gaps that limit decisions are the absence of arsenic data, the absence of growing-origin data and the small number of products.', R, H]),
      ],
    }),
    section('identity', {
      overview: [
        para('This page covers pea protein isolate and pea protein concentrate, the protein fractions made from dried peas and sold as powder or used as an ingredient.', ['The quantified evidence is two powders described by their study as pea protein, measured as sold.', R]),
        para(['Blends that list pea alongside rice, pumpkin seed or other proteins are kept separate, because a blend result cannot be assigned to one protein.', H], 'Finished protein powders and mixed formulas are covered on the protein powder product page, and rice-derived protein on [[ingredients/rice-protein]].'),
      ],
      answers: [
        para(['The page covers protein isolated or concentrated from dried peas, sold as powder; the two measured products are pea protein powders bought at retail.', R]),
        para('Isolate, concentrate, flavored powders and blends are distinct materials: an isolate holds more protein than a concentrate, and flavored or blended powders add other ingredients.', ['No study in the Index separates isolate from concentrate.', R]),
        para('Results for whole peas, other pulses or mixed plant powders do not transfer to pea protein, because protein isolation changes which part of the seed remains.', ['No study in the Index measured metals in peas before and after protein isolation.', R, H]),
      ],
    }),
    section('occurrence', {
      overview: [
        para(['The table lists every pea protein result in the Index: 32 rows from two products in one study, covering lead, cadmium and mercury and 13 other elements.', R], 'No row is graded Low, Moderate or High, because two products are too few to form a reference distribution.'),
        para(['Lead was 22.2 and 22.5 µg/kg, cadmium 40.6 and 15.4 µg/kg, and mercury 4.3 µg/kg and below 0.2 µg/kg, all on the powder as sold.', R], 'Two products cannot support a median or a typical range.'),
      ],
      answers: [
        para(['Lead, cadmium and mercury were measured, with 13 other elements; total and inorganic arsenic were not.', R]),
        para(['Each value is one analysis of one retail product: lead 22.2 and 22.5 µg/kg, cadmium 40.6 and 15.4 µg/kg, mercury 4.3 µg/kg and below 0.2 µg/kg.', R], ['Five pea blends in a Hungarian survey were below an unprinted detection limit for arsenic, cadmium, mercury and lead.', H]),
        para(['Total arsenic and inorganic arsenic are unassessed for pea protein.', R], ['The blend non-detects cannot be bounded because the detection limit was not printed.', H]),
      ],
    }),
    section('pathways', {
      overview: [
        para(['No study in the Index traces how lead or cadmium reach pea protein, whether through the soil, irrigation water, processing equipment or packaging.', R, H]),
        para(['A US market screen of 160 protein powders found that plant-based powders averaged three times the lead and five times the cadmium of whey-based powders, but it did not say which plant proteins those powders contained.', CL], 'That pattern fits a plant source for both metals, but it is an inference, not a measured pathway for pea protein.'),
      ],
      answers: [
        para(['No study in the Index measured root uptake or other biological pathways for pea protein.', R]),
        para(['No study in the Index measured contamination from agricultural inputs, processing, equipment or packaging for pea protein.', R]),
        para(['The plant-protein attribution is inferred from a market screen of unspecified plant powders; it is not a measured result for pea protein.', CL]),
      ],
    }),
    section('variation', {
      overview: [
        para(['Within the one study that measured pea protein, the two powders had nearly equal lead, 22.2 and 22.5 µg/kg, but cadmium differed more than twofold, 40.6 against 15.4 µg/kg.', R], 'The lowest observed result in that comparison is the second powder for cadmium and mercury; for lead the two are effectively tied.'),
        para(['Compared with the 27 whey powders in the same study, both pea powders were above the whey median lead of 8.6 µg/kg, an Index calculation from the study table, but well below the highest whey value of 88.4 µg/kg.', R], ['The first pea powder\'s cadmium, 40.6 µg/kg, was higher than every one of the 26 whey powders with a quantified cadmium result, whose highest value was 23.2 µg/kg.', R], 'This is a within-study product-type comparison of two pea powders, so it is tentative, not a supported preference for whey over pea.'),
        para(['No study reports pea protein by the country where the peas were grown, so China, Vietnam, the USA and Canada cannot be compared as origins for any metal.', R, H], ['Pea blends produced in the USA, Canada, Belgium and elsewhere in the EU were all below an unprinted detection limit, which cannot rank them, and production country is not growing origin.', H], 'Resolving this needs lot results for pea protein linked to the growing region, measured with a stated quantification limit.'),
      ],
      answers: [
        para(['No pea protein result is linked to growing origin, growing conditions, variety or harvest period.', R, H]),
        para(['The only variation observed is between two retail products, which differed more than twofold in cadmium at nearly equal lead.', R], 'Within-lot and between-lot variation are unmeasured.'),
        para('No comparison supports an origin or supplier preference.', ['Generalizing from two products bought in Ireland to a country or supplier would be unjustified.', R]),
      ],
      questions: [
        q('Which pea protein measured lowest in each metal?', para(['For cadmium and mercury, the second Irish powder measured lowest: 15.4 µg/kg cadmium and mercury below 0.2 µg/kg, against 40.6 and 4.3 µg/kg in the first.', R], ['For lead the two powders were effectively the same, 22.5 and 22.2 µg/kg.', R], 'Two products from one market do not show that either source is reliably lower.')),
        q('Can country of origin pick a lower-metal pea protein?', para(['Not yet: no published pea protein result names the growing region, and the blends with a stated production country were below an unprinted detection limit.', R, H], 'Origin-linked lot results are the evidence that would answer it.')),
      ],
    }),
    section('processing', {
      overview: [
        para(['No study in the Index compares lead, cadmium, arsenic or mercury in peas before and after protein isolation, or in isolate against concentrate.', R, H], 'Whether isolation removes these metals, leaves them in place or concentrates them as other seed components are removed is therefore unresolved.'),
        para(['Both quantified powders are finished retail products whose processing the study does not describe.', R], 'Flavored and blended powders add ingredients that can change the result, so their evidence is kept on the protein powder product page.'),
      ],
      answers: [
        para(['No processing step has a measured effect on metals in pea protein in the Index.', R, H]),
        para('Isolate and concentrate are distinct fractions of the pea seed.', ['Their metal content has not been compared in any study in the Index.', R]),
        para('Removal, redistribution and concentration cannot be distinguished without a before-and-after mass balance, which no study reports.', ['The two products have no paired raw-material results.', R]),
      ],
    }),
    section('controls', {
      overview: [
        para(['No measured way to lower lead or cadmium in pea protein is in the Index, at the farm or in processing.', R, H], 'The control that can be verified today is testing each lot of finished protein and rejecting lots above the buyer\'s specification.'),
        para('Testing detects contamination; it does not remove it.', ['A test is useful only when its quantification limit sits well below the level that matters, which the blend survey without a printed detection limit illustrates.', H]),
      ],
      answers: [
        para(['No prevention, mitigation or remediation measure has been evaluated for pea protein in the Index.', R, H]),
        para('With no evaluated control, there is no stage, condition or comparator to report.', ['Lot testing is a detection step, not a tested reduction.', H]),
        para(['There is no field or commercial evidence for a control; verification rests on lot testing with a stated quantification limit.', H]),
      ],
    }),
    section('tradeoffs', {
      overview: [
        para(['A lead-only specification would not have separated the two measured pea powders, because their lead was nearly equal while their cadmium differed more than twofold.', R], 'Metals do not move together, so a lot that passes one limit says little about the others unless each is tested.'),
        para(['No study in the Index reports effects of any control on protein content, yield, taste, stability or waste streams for pea protein.', R, H]),
      ],
      answers: [
        para('No intervention for pea protein has been tested, so no shift of contamination to another metal or by-product is documented.', ['The two products show that lead and cadmium can diverge between sources.', R]),
        para(['No effects on nutrition, yield, sensory quality, stability or waste streams were measured.', R, H]),
        para('Costs, constraints and failure modes of controls for pea protein are unknown.', ['The only documented failure mode is a non-detect reported without its detection limit.', H]),
      ],
    }),
    section('testing', {
      overview: [
        para(['The study that quantified pea protein digested about 0.5 g of powder with nitric and hydrochloric acid and measured it by sector-field ICP-MS, reporting one value per product with stated quantification limits such as 0.2 µg/kg for mercury.', R], ['It did not measure arsenic.', R]),
        para(['A survey that reported every pea blend as below detection did not print its detection limit, so those results cannot show how low the metals were.', H], 'A useful certificate names the accredited laboratory, the method, the quantification limit for each metal and the lot tested, and reports inorganic arsenic separately from total arsenic.'),
      ],
      answers: [
        para('Sampling should be lot-based: a single product analysis, as in the published studies, describes that product and not a supplier\'s production.', ['Each pea result in the Index is one analysis of one product.', R]),
        para(['Lead, cadmium and mercury need a method with quantification limits well below the decision level; the published study used sector-field ICP-MS with limits as low as 0.2 µg/kg for mercury.', R], 'Inorganic arsenic needs a speciation method.'),
        para(['A non-detect establishes only that the result was below the stated limit; without a printed limit it establishes nothing about how low the metal was.', H], ['Arsenic remains untested in pea protein.', R]),
      ],
    }),
    section('procurement', {
      overview: [
        para('A buyer should ask for the name of the testing laboratory and its ISO/IEC 17025 accreditation, the report number for each certificate, the quantification limit for each metal, inorganic arsenic rather than total arsenic alone, and results for the lot being bought.', ['These requests answer the gaps in the published evidence: the arsenic gap, the missing detection limits and the single-product results.', R, H]),
        para(['For a product sold in California at a 30 g serving, the lead concentration that reaches the 0.5 µg/day level is 16.7 µg/kg (0.5 ÷ 0.030 kg), so a lead quantification limit well below that is needed; at a 10 g serving the figure is 50 µg/kg.', OL], 'Choosing a specification at or below such a figure is a policy decision for the buyer, not a value set by the evidence.'),
      ],
      answers: [
        para('A buyer should request the growing origin of the peas, whether the material is isolate or concentrate, the laboratory, accreditation, report number, quantification limits and lot-level results for lead, cadmium, mercury and inorganic arsenic.', ['No published pea protein result supplies origin or arsenic.', R]),
        para(['The EU maximum level of 0.10 mg/kg cadmium for proteins from pulses is a legal requirement where it applies.', EU], ['A per-serving lead target derived from California\'s 0.5 µg/day level is a policy choice that depends on the serving size.', OL]),
        para('A change of pea origin, processor, isolate or concentrate, laboratory or quantification limit, or a lot result well above earlier lots, should trigger requalification.', ['The more than twofold cadmium difference between two products shows how much sources can differ.', R]),
      ],
    }),
    section('product', {
      overview: [
        para(['The study reported the labeled serving of each product: 30 g for the first pea powder and 10 g for the second.', R], ['At those servings the powders supply 0.666 and 0.225 µg of lead and 1.218 and 0.154 µg of cadmium, Index calculations from the study values; California\'s levels are 0.5 µg/day for lead and 4.1 µg/day for cadmium.', R, OL, OC]),
        para('Two or three scoops a day, or pea protein used as one ingredient in a blend, change these figures in proportion to the amount eaten.', ['The study assessed intake at one to three servings a day for a 70 kg adult.', R], 'Whether a product needs a California warning depends on its labeled serving, daily use and the law\'s other provisions, which this page does not assess.'),
      ],
      answers: [
        para('A finished-product estimate scales with the share of pea protein in the formula, the serving size and the other ingredients.', ['The study\'s labeled servings were 30 g and 10 g.', R]),
        para(['Consumption frequency matters: the study used one to three servings a day for a 70 kg adult.', R], 'Children, pregnant consumers and heavy users need their own intake assumptions.'),
        para('Any claim about a finished product or a population\'s intake requires measurement of that product and a separate exposure assessment.', ['Two retail products do not represent the market.', R]),
      ],
    }),
    section('assessment', {
      overview: [
        para(['The EU sets a cadmium maximum level of 0.10 mg/kg for proteins from pulses and 1.0 mg/kg for food supplements in general.', EU], ['California sets a lead level of 0.5 µg/day and an oral cadmium level of 4.1 µg/day.', OL, OC], ['FDA Closer to Zero action levels cover foods for babies and young children, not protein powders or isolates.', CTZ], ['China GB 2762-2022 has no protein powder row; its nearest rows are beans, at 0.2 mg/kg lead and 0.2 mg/kg cadmium.', CN], ['GB 2762-2025 replaced the 2022 edition from 2026-09-02.', CN25]),
        para(['The occurrence evidence is one Irish study of two pea powders and one Hungarian survey of pea blends below an unprinted detection limit.', R, H], ['A US market screen, a review, a risk assessment, a whey and vegan powder study and a Finnish plant protein study were read and do not report pea protein separately.', CL, K, B, SR, M], 'The Index has not yet transcribed the EU 2023/915 lead rows for pulses and food supplements, so no EU lead value is shown here.'),
      ],
      answers: [
        para(['The EU 0.10 mg/kg cadmium level for proteins from pulses applies to pea protein; the EU 1.0 mg/kg supplement level applies where it is sold as a food supplement.', EU], ['California\'s per-day levels for lead and cadmium apply to products sold there.', OL, OC], ['China\'s bean rows are the nearest GB 2762 entries.', CN]),
        para(['Every record that names pea protein was read: two give pea-specific results and five do not report pea protein separately.', R, H, CL, K, B, SR, M]),
        para('Unresolved: arsenic, growing origin, isolate against concentrate, processing effects and any reduction measure.', ['This version adds the page from the Index source records available on 2 November 2026.', R]),
      ],
      faqs: [
        q('Does pea protein contain lead?', para(['Both pea protein powders with published results contained lead, at 22.2 and 22.5 µg/kg as sold.', R], 'Two products cannot show how common or how high lead is across the market.')),
        q('Does pea protein contain cadmium?', para(['Yes: the two measured powders had 40.6 and 15.4 µg/kg cadmium.', R], ['Both are below the EU maximum level of 0.10 mg/kg (100 µg/kg) for proteins from pulses.', EU])),
        q('Is arsenic a concern in pea protein?', para(['It is unknown: no published pea protein result reports total or inorganic arsenic.', R], ['Pea blends in one survey were below detection for arsenic, but the detection limit was not printed.', H], 'Ask for inorganic arsenic on each lot.')),
        q('Is pea protein lower in metals than whey protein?', para(['In the one study that measured both, both pea powders were above the whey median for lead, 8.6 µg/kg across 27 whey powders, and one pea powder had more cadmium than any whey powder.', R], 'With two pea products this is a tentative comparison, not a rule.')),
        q('Is pea protein lower in metals than rice protein?', para('They cannot be compared directly for most metals.', ['Pea protein has lead and cadmium results but no arsenic; rice protein has arsenic results but no quantified lead result.', R], 'See [[ingredients/rice-protein]] for the rice evidence.')),
        q('Which country grows the lowest-metal peas for protein?', para(['No published pea protein result names the growing region, so China, Vietnam, the USA and Canada cannot be compared.', R, H], 'Origin-linked lot results would answer it.')),
        q('Does organic pea protein have fewer metals?', para(['No pea-specific data exist; across a US market screen of protein powders of all types, organic products averaged three times the lead and twice the cadmium of non-organic ones.', CL], 'That screen did not separate pea protein.')),
        q('Do flavored pea protein powders carry more metals?', para(['Across all protein powders in a US market screen, chocolate-flavored products averaged four times the lead and 110 times the cadmium of vanilla-flavored products.', CL], 'No study separates flavored pea protein.')),
        q('How do I check a pea protein against California Prop 65?', para(['Multiply the lead concentration by the serving weight: 22.2 µg/kg × 0.030 kg = 0.666 µg per 30 g serving, against the 0.5 µg/day level.', R, OL], 'Warning requirements depend on more than this arithmetic.')),
        q('What does "not detected" mean on a pea protein certificate?', para('It means the result was below the laboratory\'s limit, not that the metal is absent.', ['One survey reported pea blends as below detection without printing the limit, so the result shows nothing about how low the metal was.', H])),
        q('What should a pea protein supplier\'s test report include?', para('The accredited laboratory\'s name and ISO/IEC 17025 status, the report number, the method, the quantification limit for each metal, inorganic arsenic as well as total arsenic, and the lot tested.', ['The published evidence lacks arsenic and, in one survey, detection limits.', R, H])),
        q('Does the EU limit metals in pea protein?', para(['Yes for cadmium: 0.10 mg/kg for proteins from pulses, and 1.0 mg/kg for food supplements in general.', EU], 'The Index has not yet transcribed the EU lead rows that may apply.')),
        q('Does China set a limit for pea protein?', para(['GB 2762-2022 has no protein powder row; beans are limited to 0.2 mg/kg lead and 0.2 mg/kg cadmium.', CN], ['The 2025 edition replaced it from 2026-09-02, and its bean rows are not yet in the Index.', CN25])),
        q('Does FDA Closer to Zero cover pea protein?', para(['No: its action levels cover foods for babies and young children.', CTZ])),
      ],
    }),
  ],
};

const out = writeAuthored('pea-protein', record);
console.log(JSON.stringify(out));
