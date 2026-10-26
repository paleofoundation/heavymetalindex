// Access inventory only: existence, extraction and identity hints are not scientific dispositions.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {execFileSync} from 'node:child_process';import matter from 'gray-matter';import {auditSourceAccess} from '../../../lib/library-root.mjs';
const root=process.cwd(),out='data/evidence/contracts/leafy-greens',backup='/Users/kmfp/HMI-Library-backup';
const u=JSON.parse(fs.readFileSync(`${out}/universe-current.json`));const handoff=fs.readFileSync('/Users/kmfp/Desktop/hmi-fetch-limited-pages-2026-10-22.md','utf8').split('## leafy-greens')[1].split('## cocoa')[0];
const priority=new Set([...handoff.matchAll(/^- `([^`]+)`/gm)].map(x=>x[1]));fs.mkdirSync(`${out}/primary-text`,{recursive:true});
const previous=new Map(JSON.parse(fs.readFileSync(`${out}/access-inventory.json`)).items.filter(i=>i.artifact).map(i=>[i.artifact.path,i.artifact]));const overrides=JSON.parse(fs.readFileSync('data/evidence/library/source-access-overrides.json')).sources;
const recovered=new Map();for(const f of ['publisher-retrieval-attempts.json','alternate-retrieval-attempts.json','attachment-retrieval-attempts.json'])for(const r of JSON.parse(fs.readFileSync(`${out}/${f}`)).records){for(const a of r.attempts??[r])if(a.artifact&&/\.(pdf|xml)$/.test(a.artifact)){if(!recovered.has(r.source_id))recovered.set(r.source_id,[]);recovered.get(r.source_id).push(a.artifact);}}
// Observed DOI-matching copies in unrelated routing folders are read candidates,
// not metadata changes or scientific admissions. Use the same shared resolver.
for(const [id,files] of Object.entries(JSON.parse(fs.readFileSync(`${out}/recovered-local-paths.json`)).sources)){
 if(!recovered.has(id))recovered.set(id,[]);
 recovered.get(id).push(...files.map(file=>file.replace(`${backup}/heavy-metal-index-raw/`,'/Volumes/HMI-Library/raw/').replace(`${backup}/`,'/Volumes/HMI-Library/')));
}
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');const cache=new Map(),items=[];
for(const source_id of u.source_ids){
 const i=u.items.find(x=>x.kind==='source'&&x.source_id===source_id)??{source_id,id:`primary-source:${source_id}`,kind:'source_context',path:`wiki/sources/${source_id}.md`};
 const raw=fs.readFileSync(i.path,'utf8'),p=matter(raw),m=p.data,declared=[m.raw_path,...(m.raw_paths??[]),m.pdf_path,m.full_text_path,...(overrides[source_id]??[]),...(recovered.get(source_id)??[])].flat().filter(x=>typeof x==='string');
 const access=auditSourceAccess([...new Set(declared)],{repoRoot:root});const attempts=access.resolutions.flatMap(r=>r.attempts);const selected=access.resolved_path?{path:access.resolved_path,root:access.root_used}:null;
 let artifact=null;
 if(selected){
  if(previous.has(selected.path))cache.set(selected.path,previous.get(selected.path));
  if(!cache.has(selected.path)){
   const bytes=fs.readFileSync(selected.path),digest=sha(bytes),target=`${out}/primary-text/${digest}.txt`;let text='',metadata='',error=null;
   try{if(/\.pdf$/i.test(selected.path)){metadata=execFileSync('pdfinfo',[selected.path],{encoding:'utf8',timeout:60000});text=execFileSync('pdftotext',['-layout',selected.path,'-'],{encoding:'utf8',timeout:60000,maxBuffer:100*1024*1024});}else text=bytes.toString('utf8');fs.writeFileSync(target,text);}catch(e){error=e.message.slice(0,600);}
   cache.set(selected.path,{path:path.resolve(selected.path),resolved_root:selected.root,sha256:digest,bytes:bytes.length,pages:metadata.match(/^Pages:\s+(\d+)/m)?.[1]??null,metadata,text_path:target,text_characters:text.length,text_sha256:sha(text),extraction_error:error});
  }artifact=cache.get(selected.path);
 }
 items.push({...i,title:m.title,authors:m.authors,doi:m.doi??null,publisher_url:m.access_url??m.url??(m.doi?`https://doi.org/${m.doi}`:null),source_type:m.source_type,raw_paths:declared,priority:priority.has(i.source_id),access,attempts,artifact,status:artifact?'readable_unverified':'access_search_required'});
 fs.writeFileSync(`${out}/access-inventory.json`,JSON.stringify({date:'2026-10-22',universe_sha256:u.sha256,library_mount:'/Volumes/HMI-Library',mounted:fs.existsSync('/Volumes/HMI-Library'),backup,items},null,2)+'\n');
 if(items.length%25===0)console.log(`${items.length}/${u.source_records} records inspected; ${cache.size} artifacts extracted`);
}
console.log(JSON.stringify({records:items.length,readable:items.filter(i=>i.artifact).length,access_search_required:items.filter(i=>!i.artifact).length,priority:items.filter(i=>i.priority).length,priority_readable:items.filter(i=>i.priority&&i.artifact).length,distinct_artifacts:cache.size}));
