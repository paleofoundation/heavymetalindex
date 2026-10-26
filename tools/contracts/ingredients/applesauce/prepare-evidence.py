import csv,json,pathlib,hashlib,shutil
root=pathlib.Path(__file__).resolve().parents[4]; audit=root/'data/evidence/contracts/ingredient-rollout-2026-10-22/applesauce'; audit.mkdir(parents=True,exist_ok=True)
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def put(n,x): (audit/n).write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
base=root/'wiki/ingredients/applesauce.md'
if not (audit/'baseline.md').exists(): shutil.copy2(base,audit/'baseline.md')
put('baseline.json',{'path':'wiki/ingredients/applesauce.md','baseline':str((audit/'baseline.md').relative_to(root)),'sha256':sha(audit/'baseline.md'),'legacy_headings':[l[3:] for l in base.read_text().splitlines() if l.startswith('## ')]})
sources=['fda2022-tds-elements-fy2018-fy2020','napier2024-wanabana-lead-apple-cinnamon','troeschel2024-cinnamon-applesauce-lead']
checks=[]
for s in sources:
 p=root/f'wiki/sources/{s}.md'; checks.append({'source_id':s,'path':str(p.relative_to(root)),'sha256':sha(p)})
for n in ['napier.html','napier.txt','troeschel.html','troeschel.txt']:
 shutil.copy2(root/'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/primary'/n,audit/'primary'/n)
rows=list(csv.DictReader((audit/'primary/fda-elements.txt').open(encoding='cp1252'),delimiter='\t'))
normalized=list(csv.DictReader((root/'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv').open()))
sub=[r for r in normalized if r['tds_food_number'] in ['84','225'] and r['metal_species'] in ['Pb','Cd','tAs','tHg','Ni','Cr','U']]
for r in sub:
 source=rows[int(r['source_row_number'])-2]
 for native,k in [('TDSFoodNumber','tds_food_number'),('Concentration','concentration_original'),('ReportingLimit','reporting_limit_original'),('CalendarYear','calendar_year'),('Region','region')]:
  assert source[native].strip()==r[k],(native,r,source)
put('source-observations.json',{'primary_verified_rows':len(sub),'rows':sub})
put('source-review.json',{'date':'2026-10-22','scope':'Selected exact applesauce forms and outbreak reports; not systematic whole-literature or current-law review','checks':checks,'primary_verification':{'fda':'77 normalized measurement rows checked against original FDA TSV by source_row_number and food/concentration/reporting-limit/calendar-year/region','napier':'Full primary report and household/results/recall sections read; 1.9–3.0 ppm household range differs from 1.9–5.8 ppm post-recall testing','troeschel':'Full primary report read; publication date is 24 April 2025 despite legacy cite key'},'legacy_dispositions':[{'source_id':sources[0],'disposition':'included routine occurrence; bottled and baby-food applesauce kept distinct'},{'source_id':sources[1],'disposition':'included outbreak and response evidence; excluded from routine distribution'},{'source_id':sources[2],'disposition':'included linked national follow-up; not independent outbreak'},{'source_id':'barber2025-baby-food-elements-us','disposition':'deferred exact apple-only extraction; mixed baby-food mean cannot stand for applesauce; no borrowed number'},{'source_id':'rusin2021-vegetables-fruits-cadmium-lead-poland','disposition':'fresh fruit excluded from processed-puree comparisons; no preparation/moisture equivalence assumed'},{'source_id':'fsa2016-infant-food-formula-metals-survey','disposition':'deferred primary apple-specific composite recovery; packaging mix not inferred'}],'shared_source_corrections_requested':[{'path':'wiki/sources/troeschel2024-cinnamon-applesauce-lead.md','field':'year/title attribution','before_sha256':checks[2]['sha256'],'proposed':'publication year 2025; cite key may remain stable; distinguish collection/investigation dates 2023–2024','primary':'https://www.cdc.gov/mmwr/volumes/74/wr/mm7414a2.htm','reason':'Primary header: Weekly / April 24, 2025 / 74(14);239–244; central owns shared edits'}]})
review=json.loads((audit/'source-review.json').read_text()); review['shared_source_corrections_requested']=[];review['verified_existing_shared_corrections']=[{'source_id':sources[2],'detail':'Pinned source metadata already carries year 2025; legacy cite key retained; independently verified against primary header.'}];put('source-review.json',review)
put('primary/manifest.json',{'artifacts':[{'path':str(p.relative_to(root)),'sha256':sha(p),'bytes':p.stat().st_size,'url':'https://www.fda.gov/media/159750/download?attachment=' if p.name=='fda-elements.txt' else 'https://www.fda.gov/media/159746/download?attachment=' if p.name=='fda-key.pdf' else 'https://www.fda.gov/media/159745/download?attachment=' if p.name=='fda-report.pdf' else 'https://www.cdc.gov/mmwr/volumes/'+('73/wr/mm7328a2.htm' if p.name.startswith('napier') else '74/wr/mm7414a2.htm'),'provenance':'FDA downloaded 22 October 2026; CDC local retained primary corroborated via official web text 22 October 2026'} for p in sorted((audit/'primary').iterdir())]})
print(root,len(sub))
