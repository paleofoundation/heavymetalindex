"""Reconcile cocoa records with original public agency data; no zero imputation."""
from pathlib import Path
import json,csv,re,hashlib,collections
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa';OUT=D/'extractions';OUT.mkdir(exist_ok=True)
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def dump(n,o):(OUT/n).write_text(json.dumps(o,ensure_ascii=False,indent=2)+'\n')
fda=Path('/Users/kmfp/HMI-Library-backup/heavy-metal-index-raw/reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt')
original=list(csv.DictReader(fda.open(encoding='cp1252'),delimiter='\t'))
normalized=list(csv.DictReader((ROOT/'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv').open()))
universe=json.loads((D/'universe-current.json').read_text());members={int(x['row_locator'].split()[1]) for x in universe['items'] if x['kind']=='dataset_row' and x['path']=='data/evidence/fda_tds_fy2018_2020_element_results_samples.csv'}
records=[]
for rownum,r in enumerate(normalized,2):
 if rownum not in members:continue
 s=original[int(r['source_row_number'])-2]
 for k,sk in [('fiscal_year','FiscalYear'),('calendar_year','CalendarYear'),('collection','Collection'),('tds_food_number','TDSFoodNumber'),('tds_food_description','TDSFoodDescription'),('analyte','Analyte')]:assert r[k].strip()==s[sk].strip(),(rownum,k,r[k],s[sk])
 assert float(r['concentration_original'])==float(s['Concentration'])
 assert float(r['reporting_limit_original'])==float(s['ReportingLimit'])
 records.append({'index_item_id':f'dataset:data/evidence/fda_tds_fy2018_2020_element_results_samples.csv#row {rownum}','index_row':rownum,'original_locator':f'Original FDA tab-delimited analytical-results.txt row {r["source_row_number"]}',**r})
dump('fda2022-primary-reconciliation.json',{'artifact':str(fda),'artifact_sha256':sha(fda),'identity_verified':True,'completeness_verified':True,'identity_proof':'Original FDA column set, fiscal/calendar years and food descriptions; all indexed cocoa-associated records checked by source_row_number against preserved agency analytical tab-delimited export, not wiki prose.','checked_records':len(records),'physical_composites':len({r['sample_id'] for r in records}),'records':records,'scope_note':'All analytes retained in reconciliation. Nutrient/other-element rows receive explicit scope dispositions; Cr,tAs,Cd,Pb,Hg,Ni are occurrence eligible. Food matrices remain distinct; regional composites are not individual retail products.'})
base=Path('/Users/kmfp/HMI-Library-backup/heavy-metal-index-raw/reports/gemsfood-contaminants/2026-06-20-export')
files=[];raw=[]
for file in sorted(base.glob('*.csv')):
 count=0;selected=0
 with file.open(encoding='utf-8-sig',errors='replace',newline='') as stream:
  for line,r in enumerate(csv.DictReader(stream),2):
   count+=1
   if not re.search(r'cocoa|cacao|chocolat',r.get('FoodName','')+' '+r.get('LocalFoodName',''),re.I):continue
   selected+=1;raw.append({'artifact':str(file),'row':line,**r})
 files.append({'artifact':str(file),'sha256':sha(file),'rows':count,'cocoa_rows':selected})
groups=collections.defaultdict(list)
for r in raw:
 # Serial numbers may repeat across laboratories or years; preserve all source fields.
 # Infants-and-children exports can repeat rows in the full export. Exact records only.
 key=json.dumps({k:v for k,v in r.items() if k not in ['artifact','row']},sort_keys=True)
 groups[key].append(r)
unique=[]
for key,rs in groups.items():
 # Preserve every physical row. Equal-looking records within an export can be
 # repeated observations; content equality alone does not establish duplication.
 for candidate in rs:
  r=dict(candidate)
  r['matching_record_locations']=[{'artifact':x['artifact'],'row':x['row']} for x in rs if (x['artifact'],x['row']) != (r['artifact'],r['row'])]
  r['duplicate_decision']='not assumed; every physical row retained pending source identity adjudication'
  unique.append(r)
dump('who-gemsfood-primary-cocoa.json',{'scope':'All cocoa/cacao/chocolate FoodName OR LocalFoodName records in all 12 recovered June2026 WHO raw exports, not category-label matches.','files':files,'raw_matched_rows':len(raw),'distinct_full_record_groups':len(groups),'physical_records_retained':len(unique),'records':unique,'identity_verified':True,'completeness_verified':True,'identity_proof':'Agency GEMS/Food export column structure, contaminant/food codes, individual RecordType, original serial numbers, laboratory/year/sampling/QA metadata. All12 files read to EOF; files are the recovered June20 export, distinct from May manifests.','limits':['Do not assume numeric zero proves absence: reporting limits, record type, source ResultText and basis require per-record adjudication.','Geographic regional roll-ups can repeat underlying serial observations with differing RegionName; reconcile beyond exact-byte duplicates before pooling.','No publisher/mount retrieval exemption or completed scientific appraisal asserted by this recovery.']})
print({'fda_checked':len(records),'fda_composites':len({r['sample_id'] for r in records}),'who_raw':len(raw),'who_physical_records_retained':len(unique),'who_distinct_full_record_groups':len(groups),'who_forms':dict(collections.Counter(r['FoodName'] for r in unique))})
