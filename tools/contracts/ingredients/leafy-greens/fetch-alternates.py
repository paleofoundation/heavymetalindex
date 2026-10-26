import pathlib,json,urllib.request,datetime,hashlib
base=pathlib.Path('data/evidence/contracts/leafy-greens');rows=json.load(open(base/'alternate-retrieval-attempts.json'))['records'] if (base/'alternate-retrieval-attempts.json').exists() else []
for i in json.load(open(base/'retrieval-alternate-urls.json')):
 if any(r.get('url')==i['url'] and r.get('outcome')=='saved_unverified' for r in rows):continue
 r={**i,'attempted_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'identity_verified':False,'completeness_verified':False}
 try:
  req=urllib.request.Request(i['url'],headers={'User-Agent':'Mozilla/5.0 (compatible; academic-source-retrieval)'});resp=urllib.request.urlopen(req,timeout=25);b=resp.read(30*1024*1024);ext='xls' if b.startswith(bytes.fromhex('d0cf11e0a1b11ae1')) else 'pdf' if b.startswith(b'%PDF') else 'xml' if b.lstrip().startswith(b'<?xml') or b'<article' in b[:2000] else 'html';p=base/'retrieval'/(i['source_id']+'-alternate.'+ext);p.write_bytes(b);r.update(status=resp.status,resolved_url=resp.geturl(),artifact=str(p),bytes=len(b),sha256=hashlib.sha256(b).hexdigest(),outcome='saved_unverified')
 except Exception as e:r.update(outcome=type(e).__name__,error=str(e))
 rows.append(r);(base/'alternate-retrieval-attempts.json').write_text(json.dumps({'records':rows},indent=2)+'\n');print(i['source_id'],r['outcome'],flush=True)
