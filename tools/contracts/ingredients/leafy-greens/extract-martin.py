import json,re,pathlib,datetime
base=pathlib.Path('data/evidence/contracts/leafy-greens');i=next(i for i in json.load(open(base/'access-inventory.json'))['items'] if i['source_id']=='martin-leon2023-canary-leafy-vegetables-elements');text=pathlib.Path(i['artifact']['text_path']).read_text();rows=[]
foods=[('Romaine lettuce',36,'Lactuca sativa var. longifolia'),('Iceberg lettuce',22,'Lactuca sativa'),('Baby lettuce',18,'Lactuca sativa; source does not resolve cultivar'),('Arugula',16,'Eruca vesicaria'),('Spinach',30,'Spinacia oleracea'),("Lamb’s lettuce",24,'Source does not explicitly resolve scientific name'),('Watercress',56,'Nasturtium officinale'),('Swiss chard',42,'Beta vulgaris')]
num=r'\d[\d,]*(?:\.\d+)?'
def table_parse(start,end,codes,table):
 lines=text[text.index(start):text.index(end,text.index(start))].splitlines()
 marker=[]
 for n,l in enumerate(lines):
  m=re.match(r'^\s+('+ '|'.join(re.escape(c) for c in codes)+r')(?:\s|$)',l)
  if m:marker.append((n,m[1]))
  if len(marker)==len(codes):break
 assert [c for n,c in marker]==codes,marker
 for n,c in marker:
  before=n-1;after=n+1
  if n>1 and re.fullmatch(r'\s*'+num+r'\s*',lines[n-2]):before=n-2
  if n+2<len(lines) and re.fullmatch(r'\s*'+num+r'\)\s*',lines[n+2]):after=n+2
  median_line=lines[n-1];centers=[(m.start()+m.end())/2 for m in re.finditer(num,median_line)]
  # Wrapped Cd and Pb cells use the normal eight-column alignment from As.
  if len(centers)!=8:
   first=marker[0][0];centers=[(m.start()+m.end())/2 for m in re.finditer(num,lines[first-1])]
  assert len(centers)==8,(c,centers)
  boundaries=[0]+[int((a+b)/2) for a,b in zip(centers,centers[1:])]+[int(centers[-1]+(centers[-1]-centers[-2])/2)]
  for k,(food,nfood,latin) in enumerate(foods):
   raw=' '.join(l[boundaries[k]:boundaries[k+1]] for l in lines[before:after+1]);raw=re.sub(r'^\s*(?:'+re.escape(c)+r')(?:\s+[ab])?','',raw)
   vals=[float(v.replace(',','')) for v in re.findall(num,raw)];assert len(vals)==3,(c,k,raw,vals)
   median,q1,q3=vals;code={'As':'tAs','Hg':'tHg','Sum REE':'REE_sum','Sum ME':'minor_elements_sum'}.get(c,c)
   rows.append({'id':'lg-full-martin-'+food.lower().replace(' ','-').replace('’','')+'-'+code,'source_id':i['source_id'],'family_id':i['source_id'],'analyte':code,'material':food,'species':latin,'form':'ready-to-eat fresh leaves, dirt removed with damp paper towel; damaged leaves discarded','basis':'Fresh/wet weight, homogenized edible portion','statistic':'source-reported median and interquartile range','value':median,'q1':q1,'q3':q3,'iqr_valid':q1<=median<=q3,'n':nfood,'n_note':'Total244 foods across two sampling periods; three digestions per food are analytical repetitions. Source labels April–September winter and October–March summer; dates retained without correcting season labels.','sample_unit':'vegetable samples','origin_or_market':'Gran Canaria supermarket purchases; marketed as grown in Canary Islands','year':'April2016–March2017','unit':'ng/g (= µg/kg); no moisture conversion','censoring':'Source assigns random values between LOD and LOQ to results between those limits; below-LOD results undetected. No per-analyte food-basis limits or subgroup censor counts are tabulated. Printed zero is not verified absence.','original_cell_text':raw.strip(),'locator':{'artifact':i['artifact']['path'],'sha256':i['artifact']['sha256'],'kind':'cell','location':f'Table{table}, {food}, {c}; Methods2.1–2.4 pp3–6'},'reference_admission':'Recover numerical quantification limits and subgroup censoring before admitting these as observed medians; preserve reported summaries and all printed discrepancies.'})
table_parse('Table 1. Concentrations','Table 2. Estimated',['Fe','Zn','Cu','Se','Mn','Mo','Co'],1)
table_parse('Table 3. Concentrations','While the highest levels',['As','Cd','Hg','Pb'],3)
table_parse('Table 5. Concentrations','Table 6 shows',['Ag','Al','Au','Ba','Be','Cr','Ni','Sb','Sn','Sr','Th','Tl','U','V','Sum REE','Sum ME'],5)
assert len(rows)==216
bad=[r for r in rows if not r['iqr_valid']];assert len(bad)==1 and bad[0]['analyte']=='minor_elements_sum' and bad[0]['material']=='Lamb’s lettuce'
(base/'recovered-martin-results.json').write_text(json.dumps({'records':rows,'known_primary_discrepancy':{'cell':'Table5 continuation p14, SumME, lamb’s lettuce','median':23.7,'printed_iqr':[85.3,36.9],'action':'Retained exactly; not repaired or used as valid IQR','visual':'martin-table5-14.png'}},indent=2)+'\n')
review={'source_id':i['source_id'],'reviewed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'identity_verified':True,'completeness_verified':True,'artifact':i['artifact'],'identity_proof':'Title, nine named authors and DOI10.3390/toxics11050442 agree with primary p1. Complete21-page publication includes Tables1–6, methods, funding/data availability, conflict declaration and references.','decision':'occurrence_extracted','result_ids':[r['id'] for r in rows],'extraction_complete_for_published_leaf_concentrations':True,'rationale':'All27 analyte/element-sum rows by eight leafy types in concentration Tables1,3,5 recovered, preserving median,Q1,Q3 and N. Tables2,4,6 are dietary models, not additional measured concentrations. Raw244×47 analytical observations are not published; no values are invented for unreported individual elements or seasons.','nonmeasured_species':'iAs and MeHg mentioned among47 targets but Methods explicitly says no speciation; 65%As and20%Hg assumptions are exposure-model proxies, excluded from observed species results.','censoring_admission_issue':'Random between-LOD/LOQ substitution is explicit in Methods2.4; numerical food-basis detection limits and subgroup censored counts unrecovered. Do not call these unqualified observed subgroup medians for HMI membership.','primary_discrepancy':'SumME lamb’s lettuce printed IQR85.3–36.9 is invalid around median23.7; visually confirmed p14 and retained.'}
(base/'primary-review-martin.json').write_text(json.dumps(review,indent=2)+'\n');print(len(rows),'median/IQR records; one invalid printed IQR retained')
