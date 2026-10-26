"""Revalidate user-supplied backup candidates and preserve complete text, not scientific eligibility."""
from pathlib import Path
import json,hashlib,subprocess,re,concurrent.futures
from html.parser import HTMLParser
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa';OUT=D/'corpus-review';(OUT/'text').mkdir(parents=True,exist_ok=True)
inv=json.loads((D/'fanout-handoff/access-inventory.json').read_text())
class Text(HTMLParser):
 def __init__(self):super().__init__();self.parts=[]
 def handle_data(self,d):self.parts.append(d)
def field(md,k):
 m=re.search(r'^'+re.escape(k)+r':\s*(.*)',md,re.M);return m.group(1).strip().strip('\"\'') if m else None
def run(r):
 key=r['source_id'];record=(ROOT/r['source_record_path']).read_text();title=field(record,'title');doi=field(record,'doi');base={'source_id':key,'source_record_path':r['source_record_path'],'source_record_sha256':hashlib.sha256(record.encode()).hexdigest(),'expected_title':title,'expected_doi':doi,'byte_access_is_not_identity_or_eligibility':True}
 if not r['artifacts']:return {**base,'access':'no_artifact_in_checked_locations','candidates':[]}
 a=r['artifacts'][0];p=Path(a['path'])
 try:
  raw=p.read_bytes();sha=hashlib.sha256(raw).hexdigest();assert sha==a['sha256'],'Candidate bytes differ from inventory'
  if raw.startswith(b'%PDF'):
   out=OUT/'text'/f'{key}.txt';proc=subprocess.run(['pdftotext','-layout',str(p),str(out)],capture_output=True,text=True,timeout=120);assert proc.returncode==0,proc.stderr[:300];text=out.read_text(errors='replace');info=subprocess.run(['pdfinfo',str(p)],capture_output=True,text=True,timeout=30).stdout;pages=re.search(r'^Pages:\s*(\d+)',info,re.M);pages=int(pages[1]) if pages else None;fmt='pdf'
  else:
   text=raw.decode('utf-8',errors='replace');fmt='primary_or_converted_text';pages=None
   if '<html' in text[:2000].lower():h=Text();h.feed(text);text=' '.join(h.parts);fmt='html_text'
   out=OUT/'text'/f'{key}.txt';out.write_text(text)
  normalized=re.sub(r'\s+','',text.lower());doi_signal=bool(doi and doi not in ['null','None','none','~'] and re.sub(r'\s+','',doi.lower()).replace('https://doi.org/','') in normalized)
  matches=list(re.finditer(r'cocoa|cacao|chocolat',text,re.I));snippets=[]
  for m in matches[:8]:snippets.append(re.sub(r'\s+',' ',text[max(0,m.start()-100):m.end()+250]))
  return {**base,'access':'readable_candidate_content_identity_review_pending','artifact_path':str(p),'artifact_sha256':sha,'artifact_bytes':len(raw),'format':fmt,'pages_reported':pages,'text_page_breaks':text.count('\f'),'text_path':str(out.relative_to(ROOT)),'text_sha256':hashlib.sha256(text.encode()).hexdigest(),'text_chars':len(text),'expected_doi_found':doi_signal,'opening_text':re.sub(r'\s+',' ',text[:1800]),'cocoa_term_occurrences':len(matches),'first_cocoa_contexts':snippets}
 except Exception as e:return {**base,'access':'extraction_or_identity_hold','artifact_path':str(p),'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:records=list(pool.map(run,inv['records']))
result={'scope':'108 local discovery records; byte/text recovery only, no automated scientific disposition','mounted_library_available':Path('/Volumes/HMI-Library').exists(),'backup_provenance':'User-supplied /Users/kmfp/HMI-Library-backup candidate paths; filename not accepted as identity.','records':records}
(OUT/'access-reviewed.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
from collections import Counter
print(Counter(r['access'] for r in records));print('Text total chars',sum(r.get('text_chars',0) for r in records))
