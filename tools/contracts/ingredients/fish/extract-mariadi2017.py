"""Keep the complete plotted intervention, including decimal discrepancies."""
from pathlib import Path
import json
import re
import subprocess
import xml.etree.ElementTree as ET

B=Path('data/evidence/contracts/fish/fulltext-correction')
ID='mariadi2017-juaro-fish-pineapple-extract-pb-hg'
doc=next(r for r in json.loads((B/'publisher-document-inventory.json').read_text()) if r['source_id']==ID)
assert doc['identity_verified'] and doc['doi']=='10.26554/sti.2017.2.4.89-91'
text=Path(doc['text_path']).read_text()
assert len([p for p in text.split('\f') if p.strip()])==3
svg=B/'page-checks/mariadi2017-p2-vector.svg'
subprocess.run(['pdftocairo','-f','2','-l','2','-svg',doc['artifact'],str(svg)],check=True)
paths=[]
for node in ET.parse(svg).getroot().iter():
    if not node.tag.endswith('path') or node.attrib.get('stroke-width')!='2.25':continue
    d=node.attrib.get('d','')
    if d.count(' L ')<2:continue
    numbers=[float(v) for v in re.findall(r'[-+]?\d*\.?\d+(?:e[-+]?\d+)?',d)]
    m=[float(v) for v in re.findall(r'[-+]?\d*\.?\d+(?:e[-+]?\d+)?',node.attrib['transform'])]
    points=[(m[0]*numbers[i]+m[2]*numbers[i+1]+m[4],m[1]*numbers[i]+m[3]*numbers[i+1]+m[5]) for i in range(0,len(numbers),2)]
    paths.append({'points':points,'path':d,'transform':m,'stroke':node.attrib['stroke']})
assert len(paths)==15
rows=[]
limits=[
    'Fish number, independent treatment replicates, variance and a validated matrix LOD/LOQ are not reported. A5g analytical aliquot is not N=5fish.',
    'Reported concentrations are not metal mass balances; no cooking yield, tissue moisture, leachate concentration or recovery is supplied.',
    'Fig2 begins around0.0011mg/kg Hg while the abstract/Results state0.011mg/kg, a tenfold discrepancy.',
    'Abstract Pb endpoint0.003mg/kg disagrees with Fig1’s100%/100°C/45min endpoint around0.0003mg/kg. Neither version is silently corrected.',
    'Methods describe a3×3×3 treatment design, but Fig2 only shows seven curves;100%extract at25/50°C is not separately reported. No unreported treatment result is invented.',
    'No causal dose reduction, general cooking advice, percent removal or current legal safety claim is adopted from the unresolved source.',
]
def add(key,analyte,stat,value,lo,hi,location,form,reported,condition=None):
    row={'id':'fish-mariadi2017-'+key,'source_id':ID,'family_id':'Mariadi-Palembang-juaro-pineapple-experiment',
         'material':'Juaro fish muscle','species':'Pangasius polyuranodon','form':form,
         'basis':'Tissue as analysed; wet/dry basis and cooking yield not stated','analyte':analyte,
         'statistic':stat,'value':value,'lower_bound':lo,'upper_bound':hi,
         'reported':{'value':value,'unit':'mg/kg','text':reported},'n':None,
         'n_note':'Number of fish and independent treatment replicates not supplied; five grams is analytical aliquot mass.',
         'sample_unit':'Unspecified experimental fish-tissue sample or summary','origin_or_market':'Traditional market, Palembang, South Sumatera, Indonesia; harvest origin unreported',
         'year':'Sampling date not reported; publication2017','censoring':'The abstract reports Hg<0.0001mg/kg after treatment; this is retained as an open upper reporting bound, not a measured zero or validated assay LOQ.',
         'method':'Destructive acid digestion H2SO4/HNO3/HClO4; Shimadzu AAS, with mercury vaporizer for Hg. No Hg speciation.',
         'locator':{'artifact':doc['artifact'],'sha256':doc['sha256'],'kind':'cell','location':location},
         'limitations':limits,'extraction_status':'primary_text_and_complete_plots_verified'}
    if condition:row['treatment']=condition
    rows.append(row)
    return row

for analyte,value in [('Pb',.02),('tHg',.011)]:
    add('untreated-text-'+analyte,analyte,'reported_untreated_concentration',value,value,value,
        f'Abstract p.89 and Results p.90, untreated{analyte}', 'Untreated purchased fish muscle',str(value)+'mg/kg')
for analyte,value,lo,hi in [('Pb',.003,.003,.003),('tHg',None,0,.0001)]:
    r=add('treated-text-'+analyte,analyte,'reported_treated_concentration' if value is not None else 'reported_treated_upper_bound',value,lo,hi,
          'Abstract p.89,100%pineapple extract,45min,100°C', 'Fish muscle soaked/heated in pineapple extract',
          '0.003mg/kg' if value is not None else '<0.0001mg/kg',{'extract_percent':100,'temperature_C':100,'minutes':45})
    r['reporting_interval_upper_open']=value is None

# Paths0–7 are eight Pb curves.100°C/50% points are visible square
# markers without a continuous path; their readout is saved separately.
pb_conditions=[(50,50),(75,25),(75,50),(75,100),(100,25),(100,50),(100,100),(50,25)]
pb_zero=186.037787
pb_scale=(pb_zero-101.789609)/.02
hg_zero=354.9376
hg_scale=(hg_zero-254.2773)/.0011
all_curves=[]
for i,(pct,temp) in enumerate(pb_conditions):
    all_curves.append(('Pb',pct,temp,[(t,(pb_zero-y)/pb_scale) for t,(_,y) in zip([0,15,30,45],paths[i]['points'])],i))
all_curves.append(('Pb',50,100,[(0,.02),(15,.016),(30,.011),(45,.006)],None))
hg_conditions=[(50,25),(50,50),(50,100),(75,25),(75,50),(75,100),(100,100)]
for i,(pct,temp) in enumerate(hg_conditions,8):
    points=paths[i]['points']
    times=[0,15,45] if len(points)==3 else [0,15,30,45]
    values={t:(hg_zero-y)/hg_scale for t,(_,y) in zip(times,points)}
    if len(points)==3:
        assert pct==100 and temp==100
        values[30]=values[15] # Single horizontal path15–45min, not a missing value.
    all_curves.append(('tHg',pct,temp,sorted(values.items()),i))
for analyte,pct,temp,values,ordinal in all_curves:
    margin=.00025 if analyte=='Pb' else .000025
    for minute,point in values:
        if minute==0:continue # Repeated graphical baseline is routed once below.
        lo=max(0,round(point-margin,9));hi=max(0,round(point+margin,9))
        row=add(f'figure-{analyte}-{pct}pct-{temp}C-{minute}min',analyte,'treatment_concentration_graphical_interval',None,lo,hi,
                f'Printedp.90 Fig{1 if analyte=="Pb" else 2},{pct}%extract,{temp}°C,{minute}min',
                'Fish muscle soaked/heated in pineapple extract',f'Graphical interval{lo}–{hi}mg/kg; no exact printed numeric label',
                {'extract_percent':pct,'temperature_C':temp,'minutes':minute})
        row['graphical_digitization']={'svg':str(svg),'path_ordinal':ordinal,'point_estimate_not_measured_value':point,
                                      'margin_mg_kg':margin,'method':'Published vector curve transformed to page coordinates and calibrated to its own printed concentration axis; visually cross-checked against fullpage. For Pb100°C/50%, marker readout replaces absent continuous path. These are readout bounds, not confidence intervals.'}
for analyte,value,margin in [('Pb',.02,.00025),('tHg',.0011,.000025)]:
    add('figure-baseline-'+analyte,analyte,'graphical_untreated_concentration_interval',None,value-margin,value+margin,
        f'Printedp.90 Fig{1 if analyte=="Pb" else 2},allcurvesat0min; one shared baseline, not9/7independent samples',
        'Untreated purchased fish muscle',f'Graphical baseline approximately{value}mg/kg')
assert len(rows)==54
result={'source_id':ID,'identity_verified':True,'completeness_verified':True,
        'proof':{'doi':doc['doi'],'artifact':doc['artifact'],'sha256':doc['sha256'],'pages':3,
                 'coverage':'Full three-page paper reviewed, including Methods, Results, Conclusions and references; Fig1 nine curves×3treated times and Fig2 seven curves×3times all retained, plus both graphical baselines and four explicit text values. Fullpage90 visually checked.'},
        'coverage':{'occurrence_rows':54,'graphical_treated_rows':48,'graphical_shared_baselines':2,'text_value_rows':4,
                    'not_reported_conditions':'Methods100%extract at25°C/50°C has no separate Fig2 Hg curves; not silently manufactured.',
                    'no_reference_units':'Intervention means/statistics and independent N unknown. Curves are not raw individual fish or observed subgroup medians.'},
        'mitigation_assessment':{'stage':'Household preparation experiment','control':'Pineapple-extract soak/heating',
                                  'analytes':['Pb','tHg'],'reference':'Untreated tissue in the same experiment',
                                  'quantitative_effect_status':'Source numerical contradictions and absent replication/mass balance block a reliable removal percentage. Keep every concentration result and describe the source limits; do not recommend it as a validated mercury-removal method.'},
        'rows':rows,'reference_unit_candidates':[]}
(B/'extractions/mariadi2017.json').write_text(json.dumps(result,indent=2)+'\n')
print({'source_id':ID,'rows':len(rows),'plotted_conditions':16,'source_decimal_discrepancies':2})
