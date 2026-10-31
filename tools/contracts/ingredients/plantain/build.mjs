import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';import matter from 'gray-matter';
import {renderContractArticle,questionRecord,ingredientPresentationVersion} from '../../pilot/compiler.mjs';
import {validateSentenceCitationPlacements} from '../../pilot/sentence-citations.mjs';
import {renderControlsFromRecords} from '../../pilot/mitigation-table.mjs';
import {plantainOccurrence,plantainOptions,auditDir,sourceFile,proposedDir} from './source-adapter.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..');
export {auditDir};export const candidatePath=`${auditDir}/candidate/plantain.md`;export const synthesisPath='data/evidence/syntheses/ingredient-plantain-v1.json';export const recordPath='data/evidence/questions/ingredient/plantain.json';
const read=f=>fs.readFileSync(path.join(root,f),'utf8'),json=f=>JSON.parse(read(f)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
// Shared source records are pinned: the candidate fails if any cited record changes underneath it.
// Records proposed for library papers that have no wiki source record yet live in proposedDir until central adopts them.
export function sourcePins(s){const keys=new Set();const walk=v=>{if(v&&typeof v==='object'){for(const k of v.source_keys||[])keys.add(k);Object.values(v).forEach(walk)}};walk(s);return [...keys].sort().map(k=>({source_id:k,path:sourceFile(root,k),sha256:sha(read(sourceFile(root,k)))}))}
// The shared compiler reads source records from <base>/wiki/sources. Proposed records are overlaid on a
// read-only symlink view of the repository; nothing is written to wiki/.
export function overlayRoot(){
 const proposed=fs.existsSync(path.join(root,proposedDir))?fs.readdirSync(path.join(root,proposedDir)).filter(f=>f.endsWith('.md')):[];
 if(!proposed.length)return {base:root,cleanup:()=>{}};
 const o=fs.mkdtempSync(path.join(os.tmpdir(),'hmi-plantain-overlay-'));
 for(const e of fs.readdirSync(root))if(e!=='wiki')fs.symlinkSync(path.join(root,e),path.join(o,e));
 fs.mkdirSync(path.join(o,'wiki/sources'),{recursive:true});
 for(const e of fs.readdirSync(path.join(root,'wiki')))if(e!=='sources')fs.symlinkSync(path.join(root,'wiki',e),path.join(o,'wiki',e));
 for(const e of fs.readdirSync(path.join(root,'wiki/sources')))fs.symlinkSync(path.join(root,'wiki/sources',e),path.join(o,'wiki/sources',e));
 for(const f of proposed){if(fs.existsSync(path.join(root,'wiki/sources',f)))continue;fs.symlinkSync(path.join(root,proposedDir,f),path.join(o,'wiki/sources',f));}
 return {base:o,cleanup:()=>fs.rmSync(o,{recursive:true,force:true})};
}
export function compileIngredient(){
 const baseline=json(`${auditDir}/baseline.json`),before=read(baseline.baseline);if(sha(before)!==baseline.sha256)throw Error('Plantain recorded new-page baseline changed');
 // After central adoption the wiki page is our own candidate; any other wiki content means someone else edited it.
 if(fs.existsSync(path.join(root,baseline.path))&&!baseline.page_existed){const live=sha(read(baseline.path));const own=[baseline.adopted?.sha256,fs.existsSync(path.join(root,candidatePath))&&sha(read(candidatePath))];if(!own.includes(live))throw Error('wiki/ingredients/plantain.md differs from the adopted candidate; reconcile before rebuilding');}
 for(const p of json(`${auditDir}/source-review.json`).checks)if(sha(read(p.path))!==p.sha256)throw Error(`Plantain shared source drift: ${p.path}`);
 const s=json(synthesisPath);validateSentenceCitationPlacements(s);
 const {base,cleanup}=overlayRoot();
 try{
 const record=questionRecord(s,base);
 for(const sec of s.sections){const a=record.answers.find(x=>x.question_id===sec.answers[0].question_id);a.answer+='\n\nVisible findings overview: '+[sec.presentation,...sec.presentation.passages].map(x=>x.text).join('\n\n');a.evidence_refs=[...new Set([...a.evidence_refs,...[sec.presentation,...sec.presentation.passages].flatMap(x=>x.source_keys.map(k=>`wiki/sources/${k}.md`))])];}
 const occurrence=plantainOccurrence(root);
 s.sections.find(x=>x.id==='occurrence').observations={rows:occurrence.rows,options:plantainOptions};
 s.sections.find(x=>x.id==='controls').additional_markdown=renderControlsFromRecords(json(`${auditDir}/interventions.json`).records);
 const fm={...matter(before).data};
 const pins=sourcePins(s),refs=new Set(pins.map(p=>p.source_id)),research=[...refs].filter(k=>!/^(eu-|codex|colombiaminsalud|who-gemsfood)/.test(k)).length,official=refs.size-research;
 Object.assign(fm,{page_contract_version:'1.0.0',question_record:recordPath,synthesis_record:synthesisPath,evidence_coverage:'partial',ingredient_presentation:ingredientPresentationVersion,updated:s.date,sources:refs.size,description:s.description,dek:s.description,section_headings:s.section_headings,ingredient_faq_heading:s.universal_faqs.title});
 const labels={summary:'Summary',identity:'Scope',occurrence:'Profile',pathways:'Pathways',variation:'Variation',processing:'Processing',controls:'Mitigation',tradeoffs:'Trade-offs',testing:'Testing',procurement:'Procurement',product:'Exposure',assessment:'Review'};fm.toc_labels={...Object.fromEntries(Object.entries(s.section_headings).map(([k,v])=>[v,labels[k]])),[s.universal_faqs.title]:'FAQs'};
 fm.ingredient_chrome={title:s.title,slug:s.slug,description:s.description,updated:s.date,reference_count:refs.size,snapshot:[{label:'Research sources referenced',count:research},{label:'Official guidance and instruments',count:official}],key_evidence:s.key_evidence};
 const history='<!-- BEGIN: hmi-page-history -->\n## Update history\n\n'+s.history_note+'\n<!-- END: hmi-page-history -->';
 const page=renderContractArticle(s,base,{page:baseline.path,before:history,entry:{legacy_headings:baseline.legacy_headings,candidate_source_ids:[]},fm,record}).content;
 if(/\b(?:P95|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI|Claude)\b/i.test(page))throw Error('Forbidden public remnant');
 return {page,record,reference:occurrence.record,parity:occurrence.parity,rows:occurrence.rows,unit_counts:occurrence.unit_counts,pins};
 }finally{cleanup();}
}
export function buildIngredient({check=false}={}){const r=compileIngredient();
 const outputs={[candidatePath]:r.page,[recordPath]:JSON.stringify(r.record,null,2)+'\n',[`${auditDir}/comparator-admission.json`]:JSON.stringify(r.reference,null,2)+'\n',[`${auditDir}/row-parity.json`]:JSON.stringify(r.parity,null,2)+'\n'};
 for(const [f,c]of Object.entries(outputs)){if(check){if(!fs.existsSync(path.join(root,f))||read(f)!==c)throw Error(`Plantain output drift: ${f}`);}else{fs.mkdirSync(path.dirname(path.join(root,f)),{recursive:true});fs.writeFileSync(path.join(root,f),c);}}
 return {candidate:candidatePath,record:recordPath,rows:r.rows.length,proposed_sources:r.pins.filter(p=>p.path.startsWith(auditDir)).map(p=>p.source_id),mode:check?'check':'build'};}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){if(process.argv.slice(2).some(x=>x!=='--check'))throw Error('Only --check supported; central owns adoption.');console.log(JSON.stringify(buildIngredient({check:process.argv.includes('--check')}),null,2));}
