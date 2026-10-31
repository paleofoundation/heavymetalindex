"""Mechanical complete-text recovery. Identity and disposition require content review."""
from pathlib import Path
import json,hashlib,subprocess,re,concurrent.futures
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa';OUT=D/'text';OUT.mkdir(exist_ok=True)
access=json.loads((D/'source-access.json').read_text());old=json.loads((ROOT/'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/corpus-review/access-reviewed.json').read_text());old={x['source_id']:x for x in old['records']}
def run(r):
 out={k:r[k] for k in ['source_id','source_record_path','source_record_sha256','title','doi','publisher_url','raw_access','root_used','resolved_path']};o=old.get(r['source_id'],{})
 if not r['raw_access']:return out
 p=Path(r['resolved_path']);raw=p.read_bytes();sha=hashlib.sha256(raw).hexdigest();assert sha==r['sha256']
 out['artifact_sha256']=sha
 if o.get('artifact_sha256')==sha and o.get('text_path'):
  text=(ROOT/o['text_path']).read_text();tp=o['text_path'];pages=o.get('pages_reported')
 elif raw.startswith(b'%PDF'):
  tp=str((OUT/(r['source_id']+'.txt')).relative_to(ROOT));subprocess.run(['pdftotext','-layout',str(p),str(ROOT/tp)],check=True,capture_output=True,timeout=120);text=(ROOT/tp).read_text();info=subprocess.run(['pdfinfo',str(p)],capture_output=True,text=True).stdout;pages=int(re.search(r'^Pages:\s*(\d+)',info,re.M)[1])
 else:
  text=raw.decode('utf8',errors='replace');tp=str((OUT/(r['source_id']+'.txt')).relative_to(ROOT));(ROOT/tp).write_text(text);pages=None
 out.update(text_path=tp,text_sha256=hashlib.sha256(text.encode()).hexdigest(),pages=pages,text_chars=len(text),opening=re.sub(r'\s+',' ',text[:2200]),ending=re.sub(r'\s+',' ',text[-1200:]))
 contexts=[]
 for page,part in enumerate(text.split('\f'),1):
  lines=part.splitlines();hits=[i for i,l in enumerate(lines) if re.search(r'cocoa|cacao|chocolat|caca[uú]',l,re.I)]
  blocks=[]
  for i in hits:
   low=max(0,i-4);high=min(len(lines),i+7)
   if blocks and low<=blocks[-1][1]:blocks[-1][1]=max(high,blocks[-1][1])
   else:blocks.append([low,high])
  for lo,hi in blocks:contexts.append({'page':page if pages else None,'line':lo+1,'text':'\n'.join(lines[lo:hi])})
 out['contexts']=contexts
 return out
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:records=list(pool.map(run,access['records']))
(D/'review-index.json').write_text(json.dumps({'scope':'Full-text recovery and content locations only; not scientific decisions','records':records},ensure_ascii=False,indent=2)+'\n')
print({'records':len(records),'readable':sum(bool(r['raw_access']) for r in records),'contexts':sum(len(r.get('contexts',[])) for r in records)})
