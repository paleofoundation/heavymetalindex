"""Expand previously selected tables from preserved primary text, retaining every edible-leaf result.
No public build; the full universe and scientific ledger remain unfinished.
"""
import json,re,hashlib,pathlib
old=pathlib.Path('data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens');out=pathlib.Path('data/evidence/contracts/leafy-greens')
prior=json.load(open(old/'occurrence-findings.json'))['rows'];records=[]
A='adhikari2024-leafy-vegetables-johannesburg';B='bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing';S='see2025-malaysia-leafy-vegetables-icp-oes'
def locator(file,location):return {'artifact':str(file),'sha256':hashlib.sha256(file.read_bytes()).hexdigest(),'kind':'cell','location':location}
def add(source,key,analyte,material,form,basis,stat,value,sd,n,sampleunit,market,year,species,cell,original,censor='quantified',notes=''):
 prior_id=next((r['id'] for r in prior if r['source_id']==source and r['analyte']==analyte and r['material']==material),None)
 id=prior_id or 'lg-full-'+source.split('20')[0]+'-'+key+'-'+analyte
 records.append({'id':id,'source_id':source,'family_id':source,'analyte':analyte,'material':material,'form':form,'basis':basis,'statistic':stat,'value':value,'sd':sd,'n':n,'sample_unit':sampleunit,'origin_or_market':market,'year':year,'species':species,'unit':'mg/kg' if source in [A,S] else 'µg/kg','original_result':original,'censoring':censor,'locator':cell,'notes':notes})
# Table 2, PDF p6, independently checked against the rendered primary table.
afile=old/'primary/adhikari.pdf';t=(old/'primary/adhikari-pdf.txt').read_text();page=t.split('\f')[5];analytes=['Al','tAs','Cd','Co','Cr','Cu','tHg','Ni','Pb','Zn'];group=-1;species={'Cor':('Coriander','Coriandrum sativum'),'Let':('Lettuce','Lactuca sativa'),'Min':('Mint','Mentha sp.'),'Spr':('Spring onion leaves','Allium fistulosum'),'Swi':('Swiss chard','Beta vulgaris var. cicla')};groupnames=['Unwashed roadside leaves (five species)','Washed roadside leaves (five species)','Washed supermarket leaves (five species)','Washed vegetable-market leaves (five species)']
for line in page.splitlines():
 m=re.search(r'\b((Cor|Let|Min|Spr|Swi)(?:UW|W)\d+)\s+(.+)',line)
 if m:
  sample,prefix,rest=m.groups();values=re.findall(r'\d+(?:\.\d+)?',rest);assert len(values)==10,(sample,values)
  if prefix=='Cor':group+=1
  for a,v in zip(analytes,values):
   leaf,latin=species[prefix];form='unwashed' if group==0 else 'running tap-water washed';add(A,sample,a,f'{leaf}, {groupnames[group].split(" leaves")[0].lower()}',form,'Dry weight','species-composite concentration',float(v),None,1,'composite pooled across ten shops; laboratory sample', 'Johannesburg, South Africa; grown in South Africa','Collection dates unreported',latin,locator(afile,f'PDF p6, Table 2, {sample}, {a}'),v+' mg/kg dry weight',notes='Methods pp2–3: ten shop samples per species/market combined; roadside composite divided for washing. No independent replicate distribution is reconstructed.')
 elif 'Mean ± SD' in line:
  pairs=re.findall(r'(\d+(?:\.\d+)?)\s*±\s*(\d+(?:\.\d+)?)',line);assert len(pairs)==10
  for a,(v,sd) in zip(analytes,pairs):add(A,['OMUW','OMW','SMW','VMW'][group]+'-mean',a,groupnames[group],'unwashed' if group==0 else 'running tap-water washed','Dry weight','mean ± SD across species-composites',float(v),float(sd),5,'species-composites','Johannesburg, South Africa; grown in South Africa','Collection dates unreported','Five named leafy species',locator(afile,f'PDF p6, Table 2, {groupnames[group]}, mean ± SD, {a}'),f'{v} ± {sd} mg/kg dry weight',notes='Printed aggregate retained; some means do not reproduce individual cells. Not five independent studies or a species-specific mean.')
assert sum(r['source_id']==A for r in records)==240
# Bora Table 1 includes culinary leaves previously omitted, plus author-grouped celery with unresolved edible part.
bfile=old/'primary/bora.pdf';t=(old/'primary/bora.txt').read_text();leafs={'Cabbage':'Brassica oleracea convar. capitata','Tarragon':'Artemisia dracunculus','Parsley':'Petroselinum crispum convar. crispum','Lovage':'Levisticum officinale','Dill':'Anethum graveolens','Lettuce':'Lactuca sativa','Celery':'Apium graveolens conv. rapaceum; edible part unresolved'}
segments=[(1,t[t.index('              Maximum levels (mg/kg)',t.index('Leafy vegetables')):t.index('                                                                                             Bulbs',t.index('Leafy vegetables'))]),(2,t[t.index('Table 2. Mean'):t.index('Table 3. Mean')]),(3,t[t.index('Table 3. Mean'):])]
for table,seg in segments:
 for line in seg.splitlines():
  m=re.match(r'^\s*(Cabbage|Tarragon|Parsley|Lovage|Dill|Lettuce|Celery)\s+(.+)',line)
  if not m:continue
  leaf,rest=m.groups();cells=re.findall(r'\d+(?:\.\d+)?\s*±\s*\d+(?:\.\d+)?|BLD|no samples',rest);assert len(cells)==8,(table,leaf,cells)
  for j,cell in enumerate(cells):
   if cell=='no samples':continue
   a=['tAs','Cd','Pb','Zn'][j//2];market=['Market','Amateur farm'][j%2];vals=[float(v) for v in re.findall(r'\d+(?:\.\d+)?',cell)];form=['water-washed','5% acetic-acid washed','10% acetic-acid washed'][table-1]
   add(B,f'T{table}-{leaf}-{market.replace(" ","-")}',a,f'{leaf}, {form}, {market}',form,'Fresh weight; source conversion from dried analytical material','mean ± SD; analytical triplicates' if vals else 'BLD, numerical food-basis bound unavailable',vals[0] if vals else None,vals[1] if vals else None,None,'independent commodity/source-group foods unresolved; analytical triplicates',f'Galați County, Romania; {market}','August 2020–December 2021 collected produce',leafs[leaf],locator(bfile,f'Table {table}, leafy vegetables, {leaf}, {market}, {a}'),cell+' µg/kg fresh weight','quantified' if vals else 'BLD; authors conflate detection/quantification; numerical food-basis bound unrecovered',notes=('Celery is placed by the author among leafy vegetables, but conv. rapaceum names celeriac; edible part is not resolved and this result is excluded from leaf references. ' if leaf=='Celery' else '')+'Technical repetitions are not independent foods; exact lettuce wash duration and independent treatment allocation remain unresolved.')
assert sum(r['source_id']==B for r in records)==76
# See Table1, 4 types x6 analytes; nondetect limits remain bounds, not zeros.
sfile=old/'primary/see.pdf';species={'Cabbage':'Brassica oleracea subsp. capitata','Mustard':'Brassica juncea','Spinach':'Spinacia oleracea','Pak choi':'Brassica rapa var. chinensis'}
means={'Al':[(11.12,3.76),(28.97,5.33),(41.37,8.53),(25.69,6.32)],'Fe':[(6.30,5.78),(4.12,1.84),(13.59,4.73),(4.14,0.31)]}
for leaf,latin in species.items():
 for a in ['Al','Cd','Cr','Cu','Fe','Pb']:
  vals=means.get(a,[(None,None)]*4)[list(species).index(leaf)];limit=.004 if a in ['Cd','Pb'] else .01
  add(S,leaf.replace(' ','-'),a,f'{leaf}, laboratory-washed edible portion','running-water plus triple distilled-water laboratory wash','Fresh weight','mean ± SD' if vals[0] is not None else 'non-detect',*vals,3,'weekly purchases per vegetable type','Pasar Borong Selangor, Seri Kembangan, Malaysia','19 October–2 November 2022',latin,locator(sfile,f'Printed p222, Table1, {leaf}, {a}'),f'{vals[0]} ± {vals[1]} mg/kg fresh weight' if vals[0] is not None else f'ND; reported limit <{limit} mg/kg fresh weight','quantified' if vals[0] is not None else f'ND; reported detection limit <{limit} mg/kg',notes='Methods pp217–219: same sellers across weeks; spinach/pak choi share seller. Technical repeats do not add foods.')
assert sum(r['source_id']==S for r in records)==24
assert len(records)==340
assert len({r['id'] for r in records})==len(records)
assert {r['id'] for r in prior}.issubset({r['id'] for r in records})
(out/'recovered-previous-primary-results.json').write_text(json.dumps({'status':'primary tables expanded; universe review incomplete; not publication-ready','records':records,'counts':{s:sum(r['source_id']==s for r in records) for s in [A,B,S]},'ocr_corrections':[{'source_id':A,'cell':'Table2 LetUW2 Cr','markdown':99.99,'primary_pdf':66.65},{'source_id':A,'cell':'Table2 LetW17 Ni','markdown':69.9,'primary_pdf':6.69}],'material_fit_warning':'Celery has eight Table1 analyte/source cells. Author groups it under leafy vegetables but names conv. rapaceum; leaf-versus-root applicability needs explicit disposition before leaf routing.'},indent=2)+'\n')
print('Recovered primary concentrations:',len(records),'vs previous',len(prior))
