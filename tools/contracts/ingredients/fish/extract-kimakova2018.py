"""Extract the complete primary concentration block and all plotted species.

Unlabelled figure bars are retained as graphical identification intervals,
never silently omitted or given invented exact decimal precision.
"""
from pathlib import Path
import json
import hashlib
from PIL import Image

B = Path('data/evidence/contracts/fish/fulltext-correction')
ID = 'kimakova2018-fish-products-slovakia-mercury'
doc = next(r for r in json.loads((B / 'publisher-document-inventory.json').read_text()) if r['source_id'] == ID)
assert doc['identity_verified'] and doc['doi'] == '10.26444/aaem/84934'
text = Path(doc['text_path']).read_text()
assert len([p for p in text.split('\f') if p.strip()]) == 6
figure = B / 'page-checks/kimakova2018-figure2-original.png'
image = Image.open(figure).convert('RGB')
assert image.size == (497, 410)
rows = []
family = 'Kimakova-Eastern-Slovakia-fish-products'
limits = [
    'The 384-sample aggregate mixes polluted-reservoir fish, retail products and non-finfish seafood including octopus. It is not a finfish-muscle or ordinary-market reference median.',
    'No species sample counts, collection dates, product-specific medians or complete individual data are deposited.',
    'Results/Table3 say194 above the authors’ historical0.5mg/kg threshold; the abstract says184.194/384 matches50.52%. No current exceedance interpretation is inferred.',
    'Wet/dry weight is not stated. Homogenized material is measured directly; no moisture conversion or methylmercury proxy is applied.',
    'The authors’ recommendations and historical regulatory discussion are not adopted as current medical advice or legal classifications.',
]

def add(key, material, statistic, value, lo, hi, n, location, *, sd=None, origin=None, graphical=False):
    row = {'id': 'fish-kimakova2018-' + key, 'source_id': ID, 'family_id': family,
           'material': material, 'species': material, 'form': 'Source-specific fish tissue or processed product; aggregate includes other seafood',
           'basis': 'As analysed after homogenization; wet/dry basis not stated', 'analyte': 'tHg',
           'statistic': statistic, 'reported': {'value': value, 'sd': sd, 'unit': 'mg/kg'},
           'value': value, 'lower_bound': lo, 'upper_bound': hi, 'n': n,
           'n_note': '384 applies to the mixed aggregate only; counts of individual species and products are not supplied.',
           'sample_unit': 'Mixed fish/product aggregate summary' if n == 384 else 'Maximum within a source species group; group N unreported',
           'origin_or_market': origin or 'Eastern Slovakia; Ružín reservoir plus local food retailers, mixed collection frames',
           'year': 'Collection dates not stated; publication2018',
           'censoring': 'Matrix LOQ0.002mg/kg; instrument LOD0.01ng is not relabelled as a matrix concentration. Minimum0.08942 is above reported LOQ.',
           'locator': {'artifact': doc['artifact'], 'sha256': doc['sha256'], 'kind': 'cell', 'location': location},
           'method': 'AMA254 flameless atomic absorption, thermal decomposition/amalgamation; totalHg assay, no speciation.',
           'limitations': limits, 'extraction_status': 'primary_table_and_figure_verified'}
    if graphical:
        row['reported']['text'] = f'Unlabelled Figure2 bar; digitized interval {lo:.3f}–{hi:.3f}mg/kg, not an exact printed value'
        row['graphical_digitization'] = graphical
    rows.append(row)
    return row

for key, stat, val in [('minimum', 'minimum', .08942), ('mean', 'arithmetic_mean', 1.17265),
                       ('maximum', 'maximum', 6.55200), ('median', 'median', .57220)]:
    assert f'{val:.5f}' in text
    add('mixed-' + key, 'All384 fish and fish products, including non-finfish seafood', stat, val, val, val, 384,
        f'Printedp.490, Table3, {stat}; Methods p.489 defines included fish/products and octopus', sd=1.22670 if key == 'mean' else None)

# Original embedded raster axis ticks are50 pixels apart (0 atx129,7 atx479).
# Include±0.05mg/kg, wider than two raster pixels, for bar/axis rasterization.
species = [('Tench',22),('European perch',49),('Pike-perch',76),('Common carp',103),
           ('Northern pike',130),('Brown trout',157),('Common bream',184),('Asp',211),
           ('Common roach',238),('European chub',265),('King mackerel',292),
           ('European eel',319),('Atlantic bonito',346)]
for name,y in species:
    black = [x for x in range(132,477) if max(image.getpixel((x,y))) < 80]
    assert black and black == list(range(min(black),max(black)+1)), (name, black)
    edge = max(black) + .5
    point = (edge - 129) / 50
    origin = 'Retail purchase in Eastern Slovakia; harvest origin unreported' if name in ['King mackerel','European eel','Atlantic bonito'] else 'Ružín reservoir, Eastern Slovakia, former mining catchment'
    if name in ['Asp','King mackerel']:
        value = 6.552 if name == 'Asp' else 3.722
        assert abs(point-value)<.05
        add(name.lower().replace(' ','-'),name,'species_maximum',value,value,value,None,
            'Printedpp.490–491 Results explicitly names species maximum; Fig2 agrees',origin=origin)
    else:
        lo,hi=max(0,round(point-.05,3)),round(point+.05,3)
        add(name.lower().replace(' ','-'),name,'species_maximum_graphical_interval',None,lo,hi,None,
            f'Printedp.491 Fig2, {name}; unlabelled horizontal bar, numerical axis0–7mg/kg', origin=origin,
            graphical={'artifact':str(figure),'sha256':hashlib.sha256(figure.read_bytes()).hexdigest(),
                       'pixel_y':y,'bar_right_edge_x':edge,'axis_zero_x':129,'pixels_per_mg_kg':50,
                       'identification_margin_mg_kg':.05,'method':'Black bar endpoint in original embedded497×410 raster, visually checked against the PDF. Bounds express graphical readout resolution, not analytical CI.'})
assert len(rows)==17
result={'source_id':ID,'identity_verified':True,'completeness_verified':True,
        'proof':{'doi':doc['doi'],'artifact':doc['artifact'],'sha256':doc['sha256'],'pages':6,
                 'coverage':'Primary Methods/QA, Table3 all concentration statistics, Results, all13 species maxima in Fig2, Discussion/Recommendations/Conclusions reviewed. Original embedded Fig2 raster and fullpage491 visually inspected.'},
        'coverage':{'occurrence_rows':17,'mixed_summary_rows':4,'species_maximum_rows':13,
                    'graphical_interval_rows':11,'duplicate_routes':['Rounded prose mean1.2±1.2 and median0.6 repeat Table3 more precise statistics','Asp maximum repeats aggregate maximum but retains its species locator'],
                    'not_new_occurrence':['Table1 human absorption percentages','Table2 modeled daily exposure/retention','Table3/Fig1 concentration-bin frequencies summarize existing aggregate, not new measured concentrations','Table4 cites separate national monitoring reports; not a new Kimakova sampling family','Discussion literature concentrations remain secondary and must be reconciled to their original families']},
        'reference_assessment':{'reported_median':.57220,'admitted':False,
                                'reason':'Aggregate mixes unspecified processed products and octopus with targeted former-mining-reservoir fish. It cannot set an ordinary raw finfish-muscle reference. Species maxima cannot replace subgroup medians.'},
        'rows':rows,'reference_unit_candidates':[]}
(B/'extractions/kimakova2018.json').write_text(json.dumps(result,indent=2)+'\n')
print({'source_id':ID,'rows':len(rows),'graphical_intervals':11,'reference_admitted':False})
