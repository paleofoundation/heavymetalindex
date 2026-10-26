from pathlib import Path
import json,re,sys
b=Path('data/evidence/contracts/fish/fulltext-correction');by={r['source_id']:r for r in json.load(open(b/'document-inventory.json'))['records']}
for id in sys.argv[1:]:
 r=by[id];t=Path(r['text_path']).read_text();print('\nSOURCE',id,'HASH',r['artifact_sha256'],'PAGES',r['pages']);print('HEADER',t[:1200]);print('METHOD/RESULTS CONTENT')
 if r['kind']=='pdf':
  for i,p in enumerate(t.split('\f')):
   if re.search(r'\b(?:Materials and Methods|Participants|Subjects and|Study population|Results and|2\. Methods)\b',p,re.I):print('PAGE',i+1,p[:7000])
 else:
  headings=list(re.finditer(r'^#{1,6}\s+.*$',t,re.M));selected=[]
  for i,m in enumerate(headings):
   if re.search(r'method|result|conclu|participants|subjects|study design',m.group(),re.I):selected.append(t[m.start():headings[i+1].start() if i+1<len(headings) else len(t)])
  print('\n'.join(selected)[:17000])
 print('TABLE CAPTIONS', '\n'.join(l for l in t.splitlines() if re.search(r'\bTable\s*[1-9S]',l))[:3000]);print('ENDING',t[-600:])
