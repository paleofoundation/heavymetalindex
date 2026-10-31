// Cocoa-owned audit: shared discovery and shared read-side resolver are authoritative.
import fs from 'node:fs';
import path from 'node:path';
import {loadIndependentCorpus,recomputeUniverse} from '../../../ingredient-source-universe.mjs';
import {auditSourceAccess} from '../../../lib/library-root.mjs';
const dir='data/evidence/contracts/cocoa';
const old=JSON.parse(fs.readFileSync('data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/corpus-review/access-reviewed.json'));
const recovered=new Map(old.records.map(r=>[r.source_id,r]));
const corpus=loadIndependentCorpus(process.cwd(),{ingredients:['cocoa']}),universe=recomputeUniverse(corpus,'cocoa');
const overrides=JSON.parse(fs.readFileSync('data/evidence/library/source-access-overrides.json')).sources;
const proposalsPath=path.join(dir,'primary-recovered/source-access-proposals.json');
const ownedProposals=fs.existsSync(proposalsPath)?JSON.parse(fs.readFileSync(proposalsPath)).sources:{};
const records=corpus.sources.filter(s=>universe.source_ids.includes(s.id)).map(s=>{
 const f=s.frontmatter,o=recovered.get(s.id);
 const candidates=[f.raw_path,...(f.raw_paths??[]),f.pdf_path,f.full_text_path,...(overrides[s.id]??[]),...(ownedProposals[s.id]??[]),o?.artifact_path];
 if(s.id==='who-gemsfood-heavy-metal-contaminants')candidates.push(f.data_path,f.summary_path);
 const access=auditSourceAccess([...new Set(candidates.filter(x=>typeof x==='string'&&x))]);
 return {source_id:s.id,source_record_path:s.path,source_record_sha256:s.sha256,title:s.title,doi:f.doi??null,publisher_url:f.access_url??f.url??(f.doi?'https://doi.org/'+f.doi:null),...access,previous_text_path:o?.text_path??null};
});
fs.mkdirSync(dir,{recursive:true});
fs.writeFileSync(path.join(dir,'universe-current.json'),JSON.stringify(universe,null,2)+'\n');
fs.writeFileSync(path.join(dir,'source-access.json'),JSON.stringify({ingredient:'cocoa',checked_at:new Date().toISOString(),universe_sha256:universe.sha256,scope:'All independent source records plus previous candidate access paths; no path or title is an eligibility decision.',records},null,2)+'\n');
console.log({universe:universe.items.length,sources:records.length,readable:records.filter(r=>r.raw_access).length,without_readable:records.filter(r=>!r.raw_access).length});
