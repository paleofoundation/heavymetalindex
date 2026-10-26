"""Cocoa-owned transcription of inspected intervention tables and figure bounds.

These records are internal extraction work, not publication acceptance.
"""
from pathlib import Path
import json, re, hashlib

ROOT = Path(__file__).resolve().parents[4]
D = ROOT / 'data/evidence/contracts/cocoa'
INDEX = json.loads((D / 'review-index.json').read_text())['records']

def source(prefix):
    return next(r for r in INDEX if r['source_id'].startswith(prefix))

def save(r, **data):
    p = Path(r['resolved_path'])
    assert hashlib.sha256(p.read_bytes()).hexdigest() == r['artifact_sha256']
    obj = dict(source_id=r['source_id'], artifact=str(p), sha256=r['artifact_sha256'],
               identity_verified=True, completeness_verified=True, **data)
    (D / 'extractions' / (r['source_id'] + '.json')).write_text(
        json.dumps(obj, ensure_ascii=False, indent=2) + '\n')

r = source('chang2022')
rows, controls = [], []
for variety, values in [('Nacional', [.36, .34, .35]), ('Trinitarian', [.36, .30, .29])]:
    for dose, value in zip([0, 3, 5], values):
        row_id = f'chang2022-Cd-{variety}-{dose}'
        rows.append(dict(id=row_id, analyte='Cd', form='fermented, sun-dried cocoa beans',
            origin='Ecuador; Nacional or Trinitarian experimental material', cultivar=variety,
            treatment=f'Rhizobium japonicum liquid product {dose}% per 2 kg fermentation mass',
            year='not reported', n=3, sample_unit='2 kg experimental micro-fermenter batch',
            n_note='Six treatment groups, three experimental replications, 18 batches; harvested pods are not independent assay replicates.',
            value=value, lower_bound=value, upper_bound=value, unit='mg/kg',
            statistic='printed treatment concentration; dispersion and Cd-specific test result not supplied',
            basis='dried beans assayed after six days sun drying to 6–8% moisture; no dry-mass normalization verified',
            locator=f'Table 16, PDF pages 15–16, {variety}, {dose}%; Methods PDF pages 3–5',
            method='One gram crushed dried beans, nitric-acid microwave digestion, graphite-furnace atomic absorption as described; numerical LOD/LOQ not reported.',
            censoring='Printed positive value; analytical quantification limit unknown.'))
        if dose:
            controls.append(dict(id=f'chang2022-control-{variety}-{dose}', stage='Fermentation',
                control=f'{dose}% Rhizobium japonicum inoculation', material=f'{variety} cocoa beans',
                comparator_row_id=f'chang2022-Cd-{variety}-0', target_row_id=row_id,
                outcomes=[dict(analyte='Cd', comparator=values[0], target=value, unit='mg/kg',
                    direction='lower', percent_difference=100*(value/values[0]-1),
                    calculation='100 × (treated/control − 1); descriptive calculation from Table 16, not a paired temporal change or source uncertainty interval')],
                evidence='Small controlled micro-fermentation experiment, three batches per group; four days fermentation, turning first at 48 h then daily; six days sun drying.',
                limitations='Cd means lack dispersion and Cd-specific significance testing; no industrial validation, before/after mass balance or universal removal guarantee.',
                locator=f'Table 16, PDF pages 15–16, {variety}; Methods pages 3–5'))
save(r, rows=rows, controls=controls, extraction_complete=True,
    identity_proof='Complete 18-page Chang/Cortez/Solorzano/Flor article; DOI 10.53730/ijhs.v6nS3.8672, title and authors match.',
    complete_scope='All six printed Cd treatment results and all four within-variety treatment/control contrasts. No additional food-metal concentrations elsewhere in Tables 1–15.',
    quality_tradeoffs=dict(locator='Tables 1–15, PDF pages 6–15; conclusions page 16',
        content='Temperature, pH, Brix, cut-test and sensory outcomes were assessed. Most were not significantly different; Table 15 reports interaction differences for other flavour notes (p=.0349) and intensity (p=.0108). Ten semi-trained tasters and ordinal scores do not establish a general quality advantage.',
        sensory_intensity_control_3pct_5pct={'Nacional':[3.2,2.8,3.6], 'Trinitarian':[4.8,4.8,3.4]}),
    source_conflicts=['Abstract prints 36 to 29 mg/kg; Table 16 prints 0.36 to 0.29 mg/kg. Keep Table 16 concentrations and explicitly flag the decimal discrepancy.',
        'Narrative calls the Cd table Table 17, but its printed caption is Table 16.',
        'The authors apply an EU chocolate limit to bean treatments. That claim is not an independently verified current legal determination.'])
print('Chang:', len(rows), 'concentrations,', len(controls), 'controlled contrasts.')

r = source('vega-jara2025')
# Figure 1A is a boxplot. Intervals below express readable graphic resolution,
# not analytical uncertainty or confidence intervals. Exact text means take priority.
groups = [
    ('AMF', .56, [.55,.57], [.54,.55], [.55,.56], [.56,.57], [.56,.58], 'c'),
    ('AMF plus Callisia repens', .94*(1-.2447), [.70,.72], [.59,.61], [.75,.77], [.75,.77], [.75,.77], 'ac'),
    ('Biochar 1%', None, [.80,.82], [.72,.74], [.83,.85], [.84,.86], [.84,.86], 'ac'),
    ('Biochar 2%', None, [.86,.88], [.74,.76], [.90,.92], [.93,.95], [.96,.98], 'ab'),
    ('Callisia repens', .94*(1-.3085), [.64,.66], [.56,.58], [.60,.62], [.68,.70], [.75,.77], 'bc'),
    ('Control', .94, [.93,.95], [.86,.88], [.91,.93], [.96,.98], [1.02,1.04], 'a')]
rows=[]
for i,(name,exact,mean_bounds,minimum,median,q3,maximum,letters) in enumerate(groups):
    derived = i in (1,4)
    rows.append(dict(id=f'vega2025-Cd-beans-{i+1}', analyte='Cd', form='fermented cocoa beans dried to 8% moisture',
        origin='Huamancoto/Pumahuasi, Huánuco, Peru', cultivar='CCN51, mature eight-year plantation',
        year='trial collection calendar date not reported', treatment=name, n=3,
        sample_unit='field experimental unit, central sampled tree within five-tree unit',
        n_note='Randomized complete blocks, three blocks, six treatments, 90 trees; three pods from sampled tree are composited, not three extra independent plots.',
        statistic='treatment mean with source boxplot median/range',
        value=exact if not derived else None,
        lower_bound=exact if exact is not None and not derived else mean_bounds[0],
        upper_bound=exact if exact is not None and not derived else mean_bounds[1],
        reported=dict(mean_exact_text=exact if not derived else None,
            mean_graphic_bounds=mean_bounds, mean_calculated_from_text_percent=exact if derived else None,
            minimum_graphic_bounds=minimum, median_graphic_bounds=median,
            upper_quartile_graphic_bounds=q3, maximum_graphic_bounds=maximum, significance_letters=letters),
        unit='mg/kg', basis='source assay after fermentation and drying to 8% moisture; no verified conversion to zero-moisture dry weight',
        locator=f'Figure 1A, PDF page 6, group {i+1} ({name}); printed means/reduction percentages Results PDF page 5',
        censoring='Positive plotted results; numerical LOD/LOQ not reported.',
        method='Atomic absorption after acid digestion; source Methods pages 4–5.',
        graphical_extraction='Manually read Figure 1A against 0.1 mg/kg ticks, conservative approximately ±0.01 mg/kg resolution bounds; bounds are not confidence intervals. Exact text control/AMF means override graphic estimates.',
        limitations='One plantation, one cultivar, six-month outcome. Trial treatments are not representative commercial occurrence samples; boxes/whiskers are not new independent groups.'))
controls=[]
for i in range(5):
    rr=rows[i]
    controls.append(dict(id=f'vega2025-control-{i+1}', stage='Cultivation', control=groups[i][0],
        material='CCN51 cocoa at one Peruvian plantation', comparator_row_id=rows[5]['id'], target_row_id=rr['id'],
        outcomes=[dict(analyte='Cd', material='fermented/dried beans', control=.94,
            target=rr['value'], target_bounds=[rr['lower_bound'],rr['upper_bound']], unit='mg/kg',
            direction='no significant change' if i in (2,3) else 'lower',
            source_reported_reduction_percent={0:40.43,1:24.47,4:30.85}.get(i))],
        paired_soil_context='Available soil Cd lower with AMF (.19), Callisia (.19), their combination (.21) and 2% biochar (.19 mg/kg); total soil Cd no significant treatment effect (p=.19). Soil improvement does not establish a bean response for biochar.',
        evidence='Three experimental units per treatment; six months after application; Figure 1 and Results pages 5–6.',
        limitations='1/2% maize/pine biochar, prepared at 500°C for two hours, approximately 8/16 kg per tree; Callisia fresh biomass 10 kg/tree; AMF inoculum 1 kg/tree. Do not generalize to untested materials or soils.',
        locator='Methods PDF pages 3–5; Figure 1A–C PDF page 6'))
save(r, rows=rows, controls=controls, extraction_complete=False,
    identity_proof='Complete 15-page Folia Amazónica 34(2) e34800, DOI 10.24841/fa.v34i2.800; exact title/authors verified.',
    remaining_extraction=['Transcribe all four Figure 1 soil/transfer panels and Figure 2 nutrient/quality outcomes into linked control outcomes, including null effects. Inspect lower quartiles in Figure 1A separately; current readable mean/median/range intervals must not be represented as exact raw observations.'],
    quality_tradeoffs='Biochar raised soil organic matter/extractable P but did not significantly lower bean Cd. AMF lowered extractable P below 7 mg/kg. Soil pH 6.98–7.39 did not differ (p=.86).',
    exclusions=['Historical soil .78/bean 1.07 mg/kg are prior-2019 study measurements, not baseline observations for these randomized plots.'])
print('Vega-Jara:',len(rows),'bean groups,',len(controls),'control comparisons; soil/quality graph extraction remains.')

r=source('lopez2022')
text=(ROOT/r['text_path']).read_text().split('\f')[5]
part=text.split('Slightly alkaline',1)[1].split('acidic soils (Houben',1)[0]
lines=[line for line in part.splitlines() if re.search(r'(?:Coffee|Inoculated|Quinoa|Palm)-BC[12]%|Control',line)]
assert len(lines)==36, len(lines)
groups=[]
for idx,line in enumerate(lines):
    treatment=re.search(r'(?:Coffee|Inoculated|Quinoa|Palm)-BC[12]%|Control',line).group()
    pairs=re.findall(r'(\d+(?:[.,]\d+)?)\s+\x05\s+(\d+(?:\.\d+)?)\s*([a-z]+)',line)
    assert len(pairs)==(3 if idx<9 else 4),(idx,line,pairs)
    endpoints=['NH4OAc-extractable soil Cd','HCl-extractable soil Cd','seedling leaf Cd'] if idx<9 else ['CaCl2-extractable soil Cd','NH4OAc-extractable soil Cd','HCl-extractable soil Cd','seedling leaf Cd']
    outcomes={key:dict(mean=float(v.replace(',','.')),se=float(se),letters=letters,unit='mg/kg' if key=='seedling leaf Cd' else 'µg/kg') for key,(v,se,letters) in zip(endpoints,pairs)}
    if idx<9:outcomes['CaCl2-extractable soil Cd']=dict(mean=None,lower_bound=0,upper_bound=None,unit='µg/kg',censoring='Below detection limit; numerical limit not reported here. No fabricated zero or bound.')
    groups.append(dict(id=f'lopez2022-group-{idx+1}',soil=['slightly alkaline, non-spiked','slightly alkaline, Cd-spiked','moderately acidic, non-spiked','moderately acidic, Cd-spiked'][idx//9],
        treatment=treatment,n=3,sample_unit='greenhouse experimental replicate',outcomes=outcomes,
        locator=f'Table 2, PDF page 6, soil stratum {idx//9+1}, {treatment}',
        endpoint_limit='130-day seedlings; leaves and soil, no harvested beans, cocoa powder or chocolate.'))
controls=[]
for block in range(4):
    control=groups[block*9+8]
    for target in groups[block*9:block*9+8]:
        controls.append(dict(id=target['id']+'-control',stage='Cultivation',control=target['treatment'],material=target['soil'],
            comparator_id=control['id'],target_id=target['id'],outcomes=[dict(endpoint=k,comparator=control['outcomes'][k],target=v) for k,v in target['outcomes'].items()],
            evidence='Controlled greenhouse seedling/soil trial, 130 days, three replicates; significance letters retained separately for every endpoint.',
            limitations='Soil extraction and leaf concentrations cannot be relabelled bean reduction. Some treatments increase leaves (e.g. inoculated 1% in acidic spiked soil, 16.8 vs 13.9 mg/kg); null/adverse outcomes are retained.',
            locator=target['locator']))
save(r,rows=[],experimental_groups=groups,controls=controls,extraction_complete=False,
    identity_proof='Complete 12-page Heliyon 8 e09790, DOI 10.1016/j.heliyon.2022.e09790; López et al. exact title/authors verified.',
    remaining_extraction=['Recover and assess article supplementary Tables S1–S8, especially root/stem and growth/nutrient outcomes. Main Table 2 complete; all 32 intervention/control contrasts retained with every paired soil/leaf endpoint.'],
    complete_scope='All 36 main Table 2 treatment/control groups and 144 paired endpoints including nine nonnumeric below-detection CaCl2 results; no edible-food occurrence rows. Table 3 derived reduction factors overlap Table 2, not independent experiments.')
print('López:',len(groups),'groups,',len(controls),'paired comparisons; no bean occurrence claim.')

p=D/'content-dispositions.json';decisions=json.loads(p.read_text())
for prefix,decision in {
    'jaramillo-mazo2026':dict(disposition='context_only',locator='Primary converted article Abstract and Materials/Methods, 16S rDNA and isothermal microcalorimetry sections; results/conclusions',rationale='225 rhizosphere soils from 16 plots on five Colombian farms; bacterial community responses under natural/spiked Cd and 80-hour laboratory metabolism. No inoculation trial reducing harvested-bean Cd and no edible-cocoa concentration endpoint. Cadmium-tolerant taxa do not establish cocoa-removal efficacy.',identity_proof='Jaramillo-Mazo/Bravo/Villanueva-Mejía/Correa-Alvarez; PLoS One 21(3) e0345645, DOI 10.1371/journal.pone.0345645; complete converted article.'),
    'sounigo2023':dict(disposition='context_only',locator='PDF page 5, printed proceedings page 31, complete ClimaLOCA conference abstract',rationale='Describes project objectives and transfer of a rapid bean-Cd measurement method to a cooperative. No reported intervention effect size, concentration table or genotype ranking. This complete five-page deposit contains a one-page abstract plus proceedings/archival covers, not a full quantitative experiment report.',identity_proof='Sounigo et al., exact ClimaLOCA title; HAL hal-05182059v1, VIII Scientific Wallace Conference May 2023; proceedings 2024, deposited 2025.')
}.items():
    rr=source(prefix);decision.update(artifact=rr['resolved_path'],sha256=rr['artifact_sha256'])
    decisions['decisions'][rr['source_id']]=decision
p.write_text(json.dumps(decisions,ensure_ascii=False,indent=2)+'\n')
