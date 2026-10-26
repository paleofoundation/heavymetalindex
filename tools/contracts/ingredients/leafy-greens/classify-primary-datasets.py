"""Food-matrix content review for every recovered primary WHO/FDA result.

This sidecar does not assert reference-family identity or a completed global ledger.
"""
import collections,datetime,hashlib,json,pathlib,re
b=pathlib.Path('data/evidence/contracts/leafy-greens');p=b/'recovered-primary-dataset-results.json';rows=json.load(open(p))['records'];decisions=[]
leaf={'LEAFY VEGETABLES','Spinach (bunch)','Lettuce, head','Lettuce, leaf','Mustard greens','Kale','Chinese cabbage, type pe-tsai','Cabbage, head','Rucola','Watercress','Chinese cabbage, type pak-choi','HERBS','Kale, curly','Corn salad','Cos lettuce','Chard','Brassica leafy vegetables'}
mixed={'Ready-to-eat meal for infants and young children','Food for infant or children NES','Cereals and cereal-based products NES','Bread & other cooked cereal products','Ready to eat soups','Snack food','Composite food NES','Cereal-based food for infants and young children','Cereal-based dishes','Fruit or vegetable juice NES'}
seen=set()
for r in rows:
 name=r['material'];local=r.get('local_food_name','').strip();key=local.upper();form=r['form'];notes=[]
 if r['source_id'].startswith('who'):
  seen.add(name)
  if key in ['EDDOE','EDDOE, FRESH','EDDOES','TINDA, FRESH','KARELLA INDIAN, FRESH','SING GUA, FRESH']:
   decision='nonleaf_food';reason='Specific LocalFoodName identifies eddoe corm or a fruiting gourd, despite broad Chinese-cabbage FoodName. No leafy-food measurement established; retain primary coding conflict.'
  elif key=='KOHLRABI/KALE, FRESH':decision='ambiguous_food_matrix_context';reason='LocalFoodName combines kohlrabi swollen-stem and kale leaf identities. Source does not establish which food part was measured.'
  elif name=='BRASSICA' and 'flowerhead brassicas' in local:decision='ambiguous_food_matrix_context';reason='Source grouping includes flowerhead brassicas and head cabbages without separate leaf-food values; no allocation of pooled concentration to edible leaves.'
  elif name in mixed or key in ['CABBAGE AND APPLE, CANNED','RED CABBAGE WITH APPLE PIECES,','CABBAGE SOUP FROZEN'] or 'rahmspinat' in local.lower():
   decision='mixed_food_exposure_context';reason='Measured prepared/composite food contains leafy vegetables plus other ingredients. Keep product concentration as exposure context; do not assign it to the leaf ingredient or a raw-leaf reference.'
  elif name=='TEAS AND HERBAL TEAS (SOLID)':decision='ambiguous_food_matrix_context';reason='FoodName assigns solid tea/herbal tea while LocalFoodName says spinach/watercress/kale leaves. Preserve both. Fresh leafy-food material/preparation is not established and no fresh/dry conversion is permitted.'
  elif name=='Vegetable juice' or 'cabbage juice' in local.lower():decision='leaf_juice_occurrence';reason='Primary label explicitly identifies white-cabbage/cabbage juice. Native product-weight concentration retained as juice, separate from solid leaves.'
  elif name=='BRASSICA':decision='leaf_food_occurrence';reason='Specific LocalFoodName identifies cabbage/head-cabbage; broader BRASSICA label is retained without assuming all brassicas are leafy.'
  elif name=='Vegetables and vegetable products NES':
   assert key=='CEYLON SPINACH',(name,local);decision='leaf_food_occurrence';reason='Specific LocalFoodName identifies Ceylon spinach, despite broad vegetable-NES coding; no invented botanical species.'
  elif name in leaf:decision='leaf_food_occurrence';reason='Primary FoodName and/or specific LocalFoodName identifies an edible leaf/stem/green-shoot food. Exact type, native basis, prepared/frozen/canned/fermented labels and botanical wording stay source-scoped.'
  else:raise ValueError(('Unreviewed WHO food group',name,local))
  if name=='Spinach (bunch)' and 'head cabbage' in local.lower():notes.append('FoodName says spinach while LocalFoodName says head cabbage. Leaf-food matrix is clear but type identity conflicts; no spinach-specific or cabbage-specific reference assignment.')
  if form=='Raw' and re.search(r'\bboiled\b',local,re.I):notes.append('FoodStateName saysRaw while LocalFoodName saysboiled. This preparation conflict blocks automatic raw or cooked reference assignment; do not silently choose a field.')
  if '(fresh)' in local.lower() and 'frozen' in form.lower():notes.append('Fresh/frozen primary metadata require separate preparation handling.')
 else:
  if 'baby' in name.lower() or name.startswith('BF,'):decision='mixed_food_exposure_context';reason='FDA composite is a multi-ingredient infant product containing spinach. Product metal concentration cannot be allocated to spinach alone.'
  else:decision='leaf_food_occurrence';reason='FDA food number/description identifies prepared collards, kale, lettuce, cabbage or spinach. Preparation remains exact; one composite per result, not individual retail units.'
 decisions.append({'result_id':r['id'],'item_ids':r['item_ids'],'food_matrix_decision':decision,'scientific_reason':reason,'primary_metadata_notes':notes,'locator':r['locator']})
assert len(decisions)==34603 and len(seen)==31
summary=collections.Counter(x['food_matrix_decision'] for x in decisions);notes=collections.Counter(n for x in decisions for n in x['primary_metadata_notes'])
(b/'primary-dataset-food-matrix-review.json').write_text(json.dumps({'reviewed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'primary_fact_file':str(p),'primary_fact_file_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'scope':'All34603 recovered WHO/FDA primary result records, covering31WHO FoodName categories and445LocalFoodName labels, reviewed by their actual primary labels. No title/filename-based dispositions.','counts':dict(summary),'primary_metadata_conflict_counts':dict(notes),'limitations':'This food-matrix assessment does not establish original contributing study-family identity, resolve WHO/FDA overlap, recover193missing historical WHOexports, or approve reference membership/comparators. No publication acceptance or completed canonical ledger.','decisions':decisions},ensure_ascii=False,separators=(',',':'))+'\n');print(dict(summary));print('metadata conflicts',dict(notes))
