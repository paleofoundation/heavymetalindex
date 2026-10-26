"""Read primary indexed CSVs to EOF; discovery only, never scientific extraction."""
import sys,json,csv,re,hashlib,unicodedata
cfg=json.load(sys.stdin)
def norm(s):return re.sub(r'\s+',' ',re.sub(r'[_–—-]+',' ',unicodedata.normalize('NFKC',str(s or '')).lower())).strip()
patterns={slug:re.compile(r'(?<!\w)(?:'+ '|'.join(re.escape(norm(a)) for a in aliases if norm(a))+r')(?!\w)') for slug,aliases in cfg['aliases'].items()}
food_keys={'foodname','localfoodname','food','food_name','food_description','tds_food_description','ingredient','ingredient_slug','ingredient_label','material','matrix','source_product_label','product_label','row_label','sample_description'}
cache={}
for dataset in cfg['files']:
 file=dataset['physical_path']; h=hashlib.sha256()
 with open(file,'rb') as f:
  for block in iter(lambda:f.read(1024*1024),b''):h.update(block)
 digest=h.hexdigest();total=matched=0
 with open(file,encoding='utf-8-sig',newline='') as f:
  reader=csv.DictReader(f)
  keys=[k for k in (reader.fieldnames or []) if k.lower() in food_keys]
  if not keys:
   print(json.dumps({'type':'unsupported','path':dataset['path'],'sha256':digest,'reason':'No supported food-label columns'}));continue
  for ordinal,r in enumerate(reader,2):
   total+=1; food=' | '.join(r.get(k,'') or '' for k in keys);normalized=norm(food)
   if normalized not in cache:cache[normalized]=[slug for slug,p in patterns.items() if p.search(normalized)]
   slugs=cache[normalized]
   if not slugs:continue
   matched+=1
   identity=f"dataset:{dataset['path']}#row {ordinal}"
   item={'id':identity,'kind':'dataset_row','source_id':dataset['source_id'],'path':dataset['path'],'row_locator':f'row {ordinal}','sha256':hashlib.sha256(json.dumps(r,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(),'food':food,'matched_ingredients':slugs,'primary_export_sha256':digest,'physical_root':dataset['root_used']}
   print(json.dumps({'type':'row','item':item},ensure_ascii=False,separators=(',',':')))
 print(json.dumps({'type':'index','path':dataset['path'],'physical_path':file,'root_used':dataset['root_used'],'sha256':digest,'rows':total,'matched_rows':matched}))
