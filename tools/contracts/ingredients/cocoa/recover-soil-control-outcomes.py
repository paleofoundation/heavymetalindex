"""Attach all printed supplementary and compost paired outcomes, with source cells."""
from pathlib import Path
import json, re, zipfile, hashlib, datetime
import xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
rs=json.loads((D/'review-index.json').read_text())['records']
def source(prefix):return next(r for r in rs if r['source_id'].startswith(prefix))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
r=source('lopez2022');p=D/'extractions'/(r['source_id']+'.json');j=json.loads(p.read_text())
doc=D/'primary-recovered/lopez2022-mmc1.docx'
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
tree=ET.fromstring(zipfile.ZipFile(doc).read('word/document.xml'))
tables=[]
for i,t in enumerate(tree.findall('.//w:tbl',ns),1):
    rows=[]
    for row in t.findall('w:tr',ns):
        rows.append([''.join(c.itertext()).strip() for c in row.findall('w:tc',ns)])
    tables.append(dict(id=f'lopez2022-S{i}',locator=f'Supplement Table S{i}',rows=rows))
assert len(tables)==8
j['supplement']=dict(artifact=str(doc),sha256=sha(doc),identity_verified=True,
    identity_proof='Original supplement title and six authors match DOI 10.1016/j.heliyon.2022.e09790; eight numbered tables and two supplemental figures.',tables=tables,
    method_limits='Supplementary Description S1: solution Cd LOD 8 µg/L; not a directly transferable solid soil/plant reporting limit. Soil and plant CRM recoveries 103±1.60% and 97±2.00%.')
def numeric(text):
    s=text
    # Cell runs divide decimals in OOXML but itertext rejoins them. Preserve
    # original cells alongside parsed means and significance labels.
    m=re.match(r'\s*(\d+(?:\.\s*\d+)?)\s*(.*)',s)
    assert m,text
    return float(m[1].replace(' ','')),m[2].strip()
for i,g in enumerate(j['experimental_groups']):
    s4=tables[3]['rows'][i+1];s8=tables[7]['rows'][i+1]
    for endpoint,cell in zip(['seedling stem Cd','seedling root Cd'],s4[-2:]):
        value,letters=numeric(cell)
        g['outcomes'][endpoint]=dict(mean=value,unit='mg/kg',letters=letters,
            locator=f'Supplement Table S4 row {i+2}',original_cell=cell,
            dispersion='Not supplied in Table S4; n=3 means, no invented standard error.')
    for endpoint,unit,cell in zip(['plant dry biomass','stem diameter','stem length','root length','plant phosphorus','plant potassium'],['g','mm','cm','cm','g/kg','g/kg'],s8[-6:]):
        value,letters=numeric(cell)
        g['outcomes'][endpoint]=dict(mean=value,unit=unit,letters=letters,locator=f'Supplement Table S8 row {i+2}',original_cell=cell)
    if 'Inoculated-BC%' in s8[2]:
        g.setdefault('source_conflicts',[]).append('Table S8 omits the numeric dose in the fourth treatment label (Inoculated-BC%). Position matches 2% in main Table 2/S4, but omission retained; no assertion that the supplement explicitly prints 2%.')
for c in j['controls']:
    target=next(g for g in j['experimental_groups'] if g['id']==c['target_id'])
    comparator=next(g for g in j['experimental_groups'] if g['id']==c['comparator_id'])
    c['outcomes']=[dict(endpoint=k,comparator=comparator['outcomes'][k],target=v) for k,v in target['outcomes'].items()]
j['remaining_extraction']=['Figure S2 soil-pH time series and main soil-property graphics require explicit numerical/qualitative routing. All Table 2 and all supplementary Table S1–S8 cells are now retained; Table S4 stem/root and Table S8 growth/nutrition outcomes linked to every treatment/control comparison.']
j['source_conflicts']=['Table S8 omits the numeric dose from four inoculated-biochar treatment labels; preserve original cells and row-order linkage limitations.','Supplement Table S3 captions extractable Cd units mg/kg while main Table 2 presents µg/kg; S3 contains ANOVA p-values rather than concentration observations. Do not introduce a thousand-fold concentration conversion from a p-value table.']
p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
receipt=dict(recovered_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),doi='10.1016/j.heliyon.2022.e09790',pmcid='PMC9241039',
    url='https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9241039/supplementaryFiles',
    zip_artifact=str(D/'primary-recovered/lopez2022-supplementaryFiles.zip'),zip_sha256=sha(D/'primary-recovered/lopez2022-supplementaryFiles.zip'),
    supplement=str(doc),supplement_sha256=sha(doc),identity_verified=True,backup_write=False)
(D/'primary-recovered/lopez2022-supplement-access.json').write_text(json.dumps(receipt,indent=2)+'\n')
print('López:',len(j['controls']),'comparisons each with',len(j['controls'][0]['outcomes']),'paired endpoints; source supplement cells preserved.')

r=source('gutierrez2022');text=(ROOT/r['text_path']).read_text();pages=text.split('\f')
table3=pages[8].split('TABLE 3',1)[1].split('TABLE 4',1)[0]
table2=pages[5].split('TABLE 2',1)[1].split('FIGURE 2',1)[0]
def triples(part):
    records=[]
    for line in part.splitlines():
        if '±' in line and any(k in line for k in ['Control','Low rate','High rate']):
            vals=re.findall(r'(\d+(?:\.\d+)?)\s*±\s*(\d+(?:\.\d+)?)(\*?)',line)
            assert len(vals)==8,(line,vals)
            records.append([dict(mean=float(v),se=float(se),significant=bool(star)) for v,se,star in vals])
    assert len(records)==6,len(records)
    return records
v3=triples(table3);v2=triples(table2);groups=[];controls=[]
for farm in range(4):
    for treatment_index,treatment in enumerate(['Control','Low compost rate','High compost rate']):
        outcomes=[]
        for depth_index,depth in enumerate(['0–5 cm','5–20 cm']):
            col=farm*2+depth_index
            for endpoint,values,offset,unit,table,page in [('Cd bound to humic acid',v3,0,'µg/kg','Table 3',9),('Cd bound to fulvic acid',v3,3,'µg/kg','Table 3',9),('soil pH',v2,0,'pH','Table 2',6),('soil organic carbon',v2,3,'%','Table 2',6)]:
                outcomes.append(dict(endpoint=endpoint,depth=depth,unit=unit,**values[offset+treatment_index][col],locator=f'{table}, PDF page {page}, Farm {farm+1}, {depth}, {treatment}'))
        groups.append(dict(id=f'gutierrez2022-farm{farm+1}-{treatment_index}',farm=farm+1,treatment=treatment,n=3,sample_unit='field replicate within farm',outcomes=outcomes))
    base=groups[-3]
    for target in groups[-2:]:
        controls.append(dict(id=target['id']+'-control',stage='Cultivation',control=target['treatment'],material=f'Ecuador cacao farm {farm+1}',
            comparator_id=base['id'],target_id=target['id'],outcomes=[dict(endpoint=a['endpoint'],depth=a['depth'],comparator=b,target=a) for a,b in zip(target['outcomes'],base['outcomes'])],
            evidence='Field compost application; four farms, three replicate blocks; mean ±standard error and source significance retained by depth.',
            bean_outcome='Beans sampled at 12 months, washed, unfermented/unpeeled, dried 65°C for 72 h. Tables 4/5 give correlations with soil fractions; no treatment-specific bean concentration or bean reduction percentage is printed in the recovered paper.',
            limitations='Soil Cd redistribution and correlations cannot establish an observed bean-Cd treatment reduction. Main Methods/abstract doses 6.25/12.5 Mg/ha/year conflict with Tables 2/3 footnotes 12.5/25; do not choose one silently.',locator='Tables 2–5 and Figures 2–4; Methods PDF pages 2–4'))
obj=dict(source_id=r['source_id'],artifact=r['resolved_path'],sha256=r['artifact_sha256'],identity_verified=True,completeness_verified=True,
    identity_proof='Complete 13-page Gutiérrez et al. Frontiers in Environmental Science 10:954521, DOI 10.3389/fenvs.2022.954521; Methods, five tables, four figures, conclusion and references.',
    rows=[],experimental_groups=groups,controls=controls,extraction_complete=False,
    remaining_extraction=['Figures 2–4 soil sequential-extraction results need complete graphical routing; all printed Tables 2/3 means, errors and significance flags are retained and paired.'],
    scientific_limit='No edible-bean treatment concentration table or individual bean result is present; Table 4/5 bean coefficients are correlations, not concentrations. No invented bean removal percentage.',
    dose_conflict=dict(methods_low=6.25,methods_high=12.5,table_footnote_low=12.5,table_footnote_high=25,unit='Mg/ha/year',resolution='unresolved; do not infer cumulative-versus-annual interpretation'))
(D/'extractions'/(r['source_id']+'.json')).write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
print('Gutiérrez:',len(groups),'field groups,',len(controls),'controls,',sum(len(g['outcomes']) for g in groups),'printed soil/quality endpoints; no invented bean effect.')
