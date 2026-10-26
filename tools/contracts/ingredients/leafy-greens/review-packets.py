import json,re,pathlib
base=pathlib.Path('data/evidence/contracts/leafy-greens');d=json.load(open(base/'access-inventory.json'))
terms=r'leafy|lettuce|spinach|kale|chard|cabbage|pak.?choi|bok.?choy|watercress|amaranth'
packets=[]
for i in d['items']:
 if not i['artifact']:continue
 t=pathlib.Path(i['artifact']['text_path']).read_text();lines=t.splitlines();matches=[];page=1
 for n,l in enumerate(lines):
  if re.search(terms,l,re.I):
   matches.append({'line':n+1,'page':t[:sum(len(x)+1 for x in lines[:n])].count('\f')+1,'text':' '.join(lines[max(0,n-1):min(len(lines),n+2)])[:900]})
  if len(matches)>=25:break
 packets.append({'source_id':i['source_id'],'expected_title':i['title'],'doi':i['doi'],'artifact':i['artifact']['path'],'sha256':i['artifact']['sha256'],'pages':i['artifact']['pages'],'characters':len(t),'opening':t[:2200],'ending':t[-700:],'mentions':matches})
(base/'review-packets.json').write_text(json.dumps(packets,indent=2)+'\n')
