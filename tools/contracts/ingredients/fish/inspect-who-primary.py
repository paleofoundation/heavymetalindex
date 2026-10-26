from pathlib import Path
import json,csv,collections,hashlib
b=Path('data/evidence/contracts/fish/fulltext-correction');u=json.load(open(b.parent/'universe.json'));wanted=collections.defaultdict(set)
for i in u['items']:
 if i['path'].startswith('raw/') and i['source_id']=='who-gemsfood-heavy-metal-contaminants':wanted[i['path']].add(int(i['row_locator'].split()[1]))
access={r['path']:r for r in json.load(open(b/'primary-index-access.json'))};counts=collections.defaultdict(collections.Counter);seen={};fingerprints={};different=[];total=0;duplicates=0;missing_serial=0;examples={};pathcounts={}
for path,ordinals in wanted.items():
 r=access[path];matched=0
 with open(r['resolved_path'],encoding='utf-8-sig',newline='') as f:
  for ordinal,row in enumerate(csv.DictReader(f),2):
   if ordinal not in ordinals:continue
   total+=1;matched+=1
   for field in ['RecordType','ContaminantName','FoodCategory','FoodName','FoodStateName','UnitName','ResultBasisName','PortionTypeName']:counts[field][row.get(field,'')]+=1
   serial=row.get('SerialNumber','');
   if not serial:missing_serial+=1;continue
   key=(serial,row.get('ContaminantName',''));core={k:v for k,v in row.items() if k not in ['RegionCode','RegionName']};h=hashlib.sha256(json.dumps(core,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
   if h in fingerprints:duplicates+=1
   else:fingerprints[h]={'path':path,'row':ordinal}
   if key in seen:
    if seen[key]['hash']!=h and len(different)<30:different.append({'key':key,'first':seen[key],'other':row,'path':path,'row':ordinal})
   else:seen[key]={'hash':h,'row':row,'path':path,'ordinal':ordinal}
   for field in ['ResultText']:
    value=row.get(field,'');kind='number' if __import__('re').fullmatch(r'[+-]?[\d.,]+(?:[Ee][+-]?\d+)?',value.strip()) else 'nonnumeric';counts[field+'Kinds'][kind]+=1
    if kind=='nonnumeric' and len(examples)<30:examples.setdefault(value,row)
 pathcounts[path]=matched
report={'status':'primary_index_profile_not_eligibility_acceptance','selected_representations':total,'distinct_serial_analyte_labels_not_unique_observations':len(seen),'distinct_complete_nonregional_fingerprints':len(fingerprints),'exact_nonregional_duplicate_representations':duplicates,'serial_reuse_across_exports_examples_not_data_conflicts':different,'missing_serial':missing_serial,'counts':{k:dict(v) for k,v in counts.items()},'nonnumeric_examples':examples,'pathcounts':pathcounts,'deduplication_rule_candidate':'All nonregional fields including serial must match. Identical fingerprints are overlapping-query-view candidates only, not accepted duplicates. Serial+analyte is not a global fish identifier; different export records sharing it are retained. No row is dropped by this profiling script.'};(b/'who-primary-profile.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k] for k in ['selected_representations','distinct_serial_analyte_labels_not_unique_observations','distinct_complete_nonregional_fingerprints','exact_nonregional_duplicate_representations','missing_serial']}));print('RecordTypes',counts['RecordType']);print('Units',counts['UnitName']);print('FoodCategories',counts['FoodCategory'])
