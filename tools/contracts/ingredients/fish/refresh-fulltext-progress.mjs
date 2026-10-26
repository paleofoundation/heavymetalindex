import fs from 'node:fs';
import crypto from 'node:crypto';
const b='data/evidence/contracts/fish/fulltext-correction';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const progress=read(`${b}/progress.json`);
const verification=read(`${b}/document-verification.json`);
const status=read(`${b}/ledger-work-status.json`);
const ledger=read('data/evidence/contracts/fish/evidence-ledger.json');
const verified=[];
const rows=[];
for(const name of fs.readdirSync(`${b}/extractions`).sort()){
 if(!name.endsWith('.json'))continue;
 const data=read(`${b}/extractions/${name}`);
 if(!Array.isArray(data.rows))continue;
 if(!data.identity_verified||!data.completeness_verified)throw Error(`Extraction verification missing: ${name}`);
 verified.push({source_id:data.source_id,rows:data.rows.length,extraction_sha256:sha(`${b}/extractions/${name}`)});
 rows.push(...data.rows);
}
if(rows.length!==status.extracted_occurrence_results)throw Error('Prepared extraction/ledger count mismatch');
const unique=new Set(rows.map(r=>r.id));
if(unique.size!==rows.length)throw Error('Duplicate extraction result IDs');
if(ledger.results.some(r=>!unique.has(r.id)))throw Error('Ledger result has no prepared extraction');
let bounded=0,unknown=0;
for(const row of rows){
 if(row.lower_bound==null||row.upper_bound==null){unknown++;continue;}
 if(!Number.isFinite(row.lower_bound)||!Number.isFinite(row.upper_bound)||row.lower_bound<0||row.lower_bound>row.upper_bound)throw Error('Invalid result bounds: '+row.id);
 if(row.lower_bound!==row.upper_bound)bounded++;
 const loc=row.locator;
 if(!loc?.location||!loc.artifact||sha(loc.artifact)!==loc.sha256)throw Error('Primary locator/hash mismatch: '+row.id);
}
Object.assign(progress,{checked_at:new Date().toISOString(),status:'primary_identity_and_exhaustive_extraction_in_progress',
 identity_verified:verification.summary.identity_verified,identity_count_scope:'Header identity checks within the208 priority files only; publisher/retrieved sources are verified separately.',
 completeness_verified:verified.length,completeness_count_scope:'Completed occurrence-extraction source files; context-only reviews are counted separately in the ledger.',
 verified_extractions:verified,new_occurrence_rows_prepared:rows.length,new_occurrence_rows_rendered:0,
 canonical_ledger_state:`In progress: ${status.reviewed_ledger_items} content-reviewed items, ${rows.length} prepared occurrence rows. completed_at remains null and missing universe items block release.`,
 publication_ready:false,published:false,publication_scope:'Current full-text correction only. The original batch and later hero restoration were previously published.',
 prepared_result_audit:{unique_result_ids:unique.size,primary_artifact_hashes_match:true,bounded_results:bounded,unresolved_numeric_bounds:unknown},
});
fs.writeFileSync(`${b}/progress.json`,JSON.stringify(progress,null,2)+'\n');
fs.writeFileSync(`${b}/extraction-integrity.json`,JSON.stringify({checked_at:progress.checked_at,status:'prepared_inputs_only_not_release_acceptance',
 sources:verified.length,rows:rows.length,unique_ids:unique.size,all_primary_hashes_match:true,bounded_results:bounded,unknown_numeric_bounds:unknown,
 rendered_new_rows:0,full_ledger_complete:false,release_ready:false},null,2)+'\n');
console.log({sources:verified.length,prepared_rows:rows.length,bounded,unknown,ready:false});
