import fs from 'node:fs';import {execFileSync} from 'node:child_process';
execFileSync('/Users/kmfp/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',['-c',String.raw`
import json,xml.etree.ElementTree as E
from pathlib import Path
b=Path('data/evidence/contracts/fish/fulltext-correction');rs=json.load(open(b/'retrieved-primary-identity.json'))['records']
for r in rs:
 root=E.parse(r['path']).getroot();tables=[]
 for w in root.findall('.//table-wrap'):
  tables.append({'id':w.attrib.get('id'),'label':' '.join(w.findtext('label','').split()),'caption':' '.join(''.join(w.find('caption').itertext()).split()) if w.find('caption') is not None else '', 'rows':[[{'text':' '.join(''.join(c.itertext()).split()),'colspan':c.attrib.get('colspan','1'),'rowspan':c.attrib.get('rowspan','1')} for c in row if c.tag in ['td','th']] for row in w.findall('.//tr')], 'footnotes':' '.join(' '.join(n.itertext()) for n in w.findall('.//table-wrap-foot'))})
 sections=[]
 for sec in root.findall('./body/sec'):
  sections.append({'id':sec.attrib.get('id'),'title':sec.findtext('title',''),'text':'\n'.join(' '.join(''.join(n.itertext()).split()) for n in sec if n.tag not in ['table-wrap','fig']), 'figures':[{'id':n.attrib.get('id'),'caption':' '.join(n.itertext()),'graphic':[g.attrib for g in n.findall('.//graphic')]} for n in sec.findall('.//fig')]})
 p=b/'extractions'/(r['source_id']+'-xml-structure.json');p.parent.mkdir(exist_ok=True);p.write_text(json.dumps({'source_id':r['source_id'],'artifact':r['path'],'sha256':r['sha256'],'identity':r['identity_proof'],'tables':tables,'sections':sections},indent=2)+'\n')
 print(r['source_id'],len(tables),'tables',len(sections),'sections')
`],{stdio:'inherit'});
