from pathlib import Path
import json,hashlib,csv
import openpyxl
ROOT=Path(__file__).resolve().parents[4];A=ROOT/'data/evidence/contracts/ingredient-rollout-2026-10-22/avocado'
def write(p,v):p.write_text(json.dumps(v,ensure_ascii=False,indent=2,default=str)+'\n')
p=A/'primary/bedoya.xlsx';assert hashlib.md5(p.read_bytes()).hexdigest()=='b4040563dbe1d58c71fd80e70cd27293'
s=openpyxl.load_workbook(p,read_only=True,data_only=True)['Dataset']
records=[]
for rn,r in enumerate(s.iter_rows(values_only=True),1):
 if str(r[2]).strip()!='Avocado':continue
 assert r[14]=='Pulp' and r[15]=='AAS' and r[17]=='mg/kg'
 for a,c in [('tAs',20),('Cd',25),('Pb',31)]:
  records.append(dict(sample_id=r[0],workbook_row=rn,analyte=a,reported=r[c],unit=r[17],cultivar=r[4],portion=r[14],district=r[8],province=r[7],date=str(r[12]),method=r[15],basis='Source-native edible pulp; moisture basis not explicitly labelled in descriptor or workbook',locator=f'Dataset!{openpyxl.utils.get_column_letter(c+1)}{rn}'))
assert len(records)==24
write(A/'bedoya-samples.json',{'source_id':'bedoya-perales2023-moquegua-peru-mining-dataset','samples':records,'sample_units':'Eight site-level edible-pulp composites, each from at least 15 permanent-crop subsamples; not 120 independent fruit or 24 samples.','excluded_soil_only':7,'basis_limit':'No moisture conversion or numerical regulatory comparison.'})
f=openpyxl.load_workbook(A/'primary/fda2022-summary.xlsx',read_only=True,data_only=True)['SummaryElementsFY18-FY20']
rows={int(r['source_summary_xlsx_row']):r for r in csv.DictReader((ROOT/'data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv').open()) if r['tds_food_number']=='97'}
checks=[]
for rn,r in rows.items():
 v=list(next(f.iter_rows(min_row=rn,max_row=rn,values_only=True)))
 assert v[0]==97 and v[1]=='Avocado, raw';assert v[2]==int(r['n']);assert v[4]==int(r['detected_n']);assert v[5]==int(r['non_detect_n']);checks.append({'row':rn,'food':v[1],'analyte':v[3],'n':v[2],'detected':v[4],'non_detect':v[5],'min':v[8],'max':v[9],'reporting_limit':v[10]})
write(A/'fda-primary-checks.json',{'status':'pass','checks':checks,'sha256':hashlib.sha256((A/'primary/fda2022-summary.xlsx').read_bytes()).hexdigest()})
print('Verified FDA rows:',len(checks),'Moquegua pulp results:',len(records))
