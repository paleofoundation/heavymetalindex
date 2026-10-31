"""Attempt public DOI/publisher access; saved responses are never assumed complete primary texts."""
import pathlib,json,urllib.request,urllib.error,datetime,hashlib,re,time
base=pathlib.Path('data/evidence/contracts/leafy-greens');d=json.load(open(base/'access-inventory.json'));dest=base/'retrieval';dest.mkdir(exist_ok=True);results=[]
for i in d['items']:
 if i['artifact'] or not i['priority']:continue
 url=i['publisher_url'];r={'source_id':i['source_id'],'doi':i['doi'],'requested_url':url,'attempted_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'identity_verified':False,'completeness_verified':False,'attempts':[]}
 if not url:r['attempts'].append({'outcome':'No publisher URL in source record; external discovery required'})
 else:
  candidates=[url]
  for target in candidates:
   a={'url':target,'attempted_at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
   try:
    req=urllib.request.Request(target,headers={'User-Agent':'Mozilla/5.0 (compatible; academic-source-retrieval)'});resp=urllib.request.urlopen(req,timeout=18);b=resp.read(30*1024*1024);a.update(status=resp.status,resolved_url=resp.geturl(),content_type=resp.headers.get('Content-Type'),bytes=len(b));ext='pdf' if b.startswith(b'%PDF') else 'html';f=dest/(i['source_id']+('-pdf' if len(r['attempts']) else '')+'.'+ext);f.write_bytes(b);a.update(artifact=str(f),sha256=hashlib.sha256(b).hexdigest(),outcome='response_saved_unverified')
    if ext=='html' and len(candidates)==1:
     t=b.decode('utf8',errors='replace');m=re.search(r'<meta[^>]*name=["\']citation_pdf_url["\'][^>]*content=["\']([^"\']+)',t,re.I) or re.search(r'<meta[^>]*content=["\']([^"\']+)["\'][^>]*name=["\']citation_pdf_url',t,re.I)
     if m:
      from urllib.parse import urljoin
      candidates.append(urljoin(resp.geturl(),m[1].replace('&amp;','&')))
   except Exception as e:a.update(outcome=type(e).__name__,error=str(e)[:400])
   r['attempts'].append(a)
 r['mount_attempt']={'path':'/Volumes/HMI-Library','mounted':pathlib.Path('/Volumes/HMI-Library').is_dir(),'outcome':'not mounted; cannot earn access-blocked Gate3'};r['raw_and_backup_attempts']=i['access']['resolutions'];results.append(r)
 (base/'publisher-retrieval-attempts.json').write_text(json.dumps({'date':'2026-10-22','records':results},indent=2)+'\n')
 print(i['source_id'],[(a.get('status'),a['outcome']) for a in r['attempts']],flush=True)
