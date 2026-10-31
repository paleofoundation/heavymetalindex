"""Preserve exact, publicly linked supporting files and dated retrieval receipts."""
import datetime,hashlib,json,pathlib,urllib.request,sys
base=pathlib.Path('data/evidence/contracts/leafy-greens')
requests=json.loads((base/'attachment-requests.json').read_text())
log=base/'attachment-retrieval-attempts.json'
rows=json.loads(log.read_text())['records'] if log.exists() else []
for req in requests:
 if len(sys.argv)>1 and req['filename'] not in sys.argv[1:]:continue
 if any(r['url']==req['url'] and r.get('outcome')=='saved_unverified' for r in rows):continue
 row={**req,'attempted_at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
 try:
  with urllib.request.urlopen(urllib.request.Request(req['url'],headers={'User-Agent':'Mozilla/5.0 (academic-source-retrieval)'}),timeout=30) as response:
   blob=response.read(50*1024*1024)
   target=base/'retrieval'/req['filename'];target.write_bytes(blob)
   row.update(status=response.status,resolved_url=response.geturl(),artifact=str(target),sha256=hashlib.sha256(blob).hexdigest(),bytes=len(blob),outcome='saved_unverified',identity_verified=False,completeness_verified=False)
 except Exception as err:row.update(outcome=type(err).__name__,error=str(err))
 rows.append(row);log.write_text(json.dumps({'records':rows},indent=2)+'\n');print(req['filename'],row['outcome'],flush=True)
