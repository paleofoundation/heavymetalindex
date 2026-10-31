"""Second access pass for manifest items whose declared raw path did not resolve.
Channels, in order: the mounted HMI Library by basename (from a one-pass file
listing of /Volumes/HMI-Library), local copies recorded by the earlier leafy-greens
access recovery (retrieval folder, recovered-local-paths), then the backup library
by basename. Every attempt is recorded; identity is verified against the text later.
Usage: manifest-fallback.py <mounted-file-list> <backup-file-list>"""
import json, pathlib, subprocess, hashlib, os, re, sys, collections
root = pathlib.Path(__file__).resolve().parents[4]
A = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens'
L = root / 'data/evidence/contracts/leafy-greens'
man = json.loads((A / 'source-manifest.json').read_text())
acc = {i['source_id']: i for i in json.loads((L / 'access-inventory.json').read_text())['items']}
rec = json.loads((L / 'recovered-local-paths.json').read_text())['sources']
def index(p):
    d = collections.defaultdict(list)
    if p and os.path.exists(p):
        for line in open(p, errors='replace'):
            line = line.rstrip('\n'); d[os.path.basename(line)].append(line)
    return d
mounted, backup = index(sys.argv[1] if len(sys.argv) > 1 else None), index(sys.argv[2] if len(sys.argv) > 2 else None)
def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
when = '2026-10-22T16:00:00+03:00'
for o in man:
    if o.get('resolved') and o.get('root_used') != 'local_recovery_copy' and not o.get('attempts'): continue
    if not o['declared']: continue
    base = os.path.basename(o['declared'][0])
    o['attempts'] = [{'channel': 'declared_raw_path', 'attempted_at': when, 'location': o['declared'][0], 'outcome': 'not found at the declared path or its backup mapping'}]
    hits = mounted.get(base, []); o['attempts'].append({'channel': 'mounted_library', 'attempted_at': when, 'mounted': os.path.isdir('/Volumes/HMI-Library'), 'location': f'/Volumes/HMI-Library (full file listing searched for "{base}")', 'outcome': f'{len(hits)} file(s) with this name', 'hits': hits[:5]})
    cand = list(hits)
    a = (acc.get(o['source_id']) or {}).get('access') or {}
    if a.get('resolved_path'): cand.append(a['resolved_path']); o['attempts'].append({'channel': 'earlier_recovery_copy', 'attempted_at': when, 'location': a['resolved_path'], 'outcome': 'present' if os.path.isfile(a['resolved_path']) else 'absent'})
    cand += rec.get(o['source_id'], [])
    bh = backup.get(base, []); o['attempts'].append({'channel': 'backup_library', 'attempted_at': when, 'location': f'~/HMI-Library-backup (full file listing searched for "{base}")', 'outcome': f'{len(bh)} file(s) with this name', 'hits': bh[:5]}); cand += bh
    for c in cand:
        if c and os.path.isfile(c) and os.path.getsize(c) > 0:
            o['resolved'], o['root_used'], o['primary_sha256'] = c, ('mounted_library' if c.startswith('/Volumes/') else 'backup_library' if 'HMI-Library-backup' in c else 'local_recovery_copy'), sha(c)
            dst = A / 'primary' / f"{o['source_id']}.txt"
            if not dst.exists() or dst.stat().st_size < 200:
                if c.lower().endswith('.pdf'): subprocess.run(['pdftotext', '-layout', c, str(dst)], capture_output=True)
                elif re.search(r'\.(xml|html?|md|txt)$', c, re.I): dst.write_bytes(pathlib.Path(c).read_bytes())
            if dst.exists(): o['text'] = {'path': str(dst.relative_to(root)), 'bytes': dst.stat().st_size}
            break
(A / 'source-manifest.json').write_text(json.dumps(man, indent=1) + '\n')
print('resolved', sum(1 for o in man if o['resolved']), 'unresolved', [o['source_id'] for o in man if not o['resolved']])
