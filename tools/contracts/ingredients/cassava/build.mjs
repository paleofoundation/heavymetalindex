import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';
import {renderContractArticle,questionRecord,ingredientPresentationVersion} from '../../pilot/compiler.mjs';
import {validateSentenceCitationPlacements} from '../../pilot/sentence-citations.mjs';
import {renderControlsFromRecords} from '../../pilot/mitigation-table.mjs';
import {cassavaOccurrence,cassavaOptions,auditDir} from './source-adapter.mjs';
import {makeOverlay,sourceRecordPath} from './overlay.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..');
export {auditDir};export const candidatePath=`${auditDir}/candidate/cassava.md`;export const synthesisPath='data/evidence/syntheses/ingredient-cassava-v1.json';export const recordPath='data/evidence/questions/ingredient/cassava.json';
const read=f=>fs.readFileSync(path.join(root,f),'utf8'),json=f=>JSON.parse(read(f)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
// Shared source records are pinned: the candidate fails if any cited record changes underneath it.
export function sourcePins(s){const keys=new Set();const walk=v=>{if(v&&typeof v==='object'){for(const k of v.source_keys||[])keys.add(k);Object.values(v).forEach(walk)}};walk(s);return [...keys].sort().map(k=>({source_id:k,path:sourceRecordPath(root,k),sha256:sha(read(sourceRecordPath(root,k)))}))}
export function compileIngredient(){
 // New page: there is no wiki baseline. The recorded baseline says so; the page must still be absent
 // in the working folder, or (after central adoption) identical to this candidate.
 const baseline=json(`${auditDir}/baseline.json`);if(!baseline.new_page)throw Error('Cassava baseline must record a new page');
 const live=path.join(root,baseline.path);if(fs.existsSync(live)&&fs.existsSync(path.join(root,candidatePath))&&read(baseline.path)!==read(candidatePath)&&sha(read(baseline.path))!==baseline.adopted?.sha256)throw Error('wiki/ingredients/cassava.md differs from both the candidate and the recorded adoption; re-baseline before building');
 for(const p of json(`${auditDir}/source-review.json`).checks)if(sha(read(p.path))!==p.sha256)throw Error(`Cassava shared source drift: ${p.path}`);
 const s=json(synthesisPath);validateSentenceCitationPlacements(s);
 // New papers without a shared record yet are read from proposed drafts through a read-only overlay.
 const overlay=makeOverlay(root);try{
 const record=questionRecord(s,overlay.base);
 for(const sec of s.sections){const a=record.answers.find(x=>x.question_id===sec.answers[0].question_id);a.answer+='\n\nVisible findings overview: '+[sec.presentation,...sec.presentation.passages].map(x=>x.text).join('\n\n');a.evidence_refs=[...new Set([...a.evidence_refs,...[sec.presentation,...sec.presentation.passages].flatMap(x=>x.source_keys.map(k=>`wiki/sources/${k}.md`))])];}
 const occurrence=cassavaOccurrence(root);
 s.sections.find(x=>x.id==='occurrence').observations={rows:occurrence.rows,options:cassavaOptions};
 s.sections.find(x=>x.id==='controls').additional_markdown=renderControlsFromRecords(json(`${auditDir}/interventions.json`).records);
 const fm={...json(`${auditDir}/new-page-frontmatter.json`)};
 const refs=new Set(sourcePins(s).map(p=>p.source_id)),research=[...refs].filter(k=>!/^(eu-|codex|who-)/.test(k)).length,official=refs.size-research;
 Object.assign(fm,{updated:s.date,sources:refs.size,page_contract_version:'1.0.0',question_record:recordPath,synthesis_record:synthesisPath,evidence_coverage:'partial',ingredient_presentation:ingredientPresentationVersion,description:s.description,dek:s.description,section_headings:s.section_headings,ingredient_faq_heading:s.universal_faqs.title});
 const labels={summary:'Summary',identity:'Scope',occurrence:'Profile',pathways:'Pathways',variation:'Variation',processing:'Processing',controls:'Mitigation',tradeoffs:'Trade-offs',testing:'Testing',procurement:'Procurement',product:'Exposure',assessment:'Review'};fm.toc_labels={...Object.fromEntries(Object.entries(s.section_headings).map(([k,v])=>[v,labels[k]])),[s.universal_faqs.title]:'FAQs'};
 fm.ingredient_chrome={title:s.title,slug:s.slug,description:s.description,updated:s.date,reference_count:refs.size,snapshot:[{label:'Research sources referenced',count:research},{label:'Official guidance and instruments',count:official}],key_evidence:[
  {label:'Exposure',text:'No verified estimate of metal exposure from cassava exists; a reported Colombian cadmium risk figure cannot be reproduced.',href:'#exposure-from-cassava',link_label:'Exposure'},
  {label:'Limits',text:'The EU limits fresh tropical roots to 0.10 mg/kg lead and 0.050 mg/kg cadmium; no metal limit is specific to flour or tapioca.',href:'#buying-and-verifying-cassava',link_label:'Limits by market'},
  {label:'Key distinction',text:'European cassava root lead was often above 100 µg/kg; roots submitted from the Americas were far lower.',href:'#which-forms-and-markets-measured-lower',link_label:'Variation'}]};
 const history='<!-- BEGIN: hmi-page-history -->\n## Update history\n\n22 October 2026 — First published from every cassava record in the library: WHO GEMS/Food monitoring results for root, cooked cassava, flour and starch, five field, market and processing studies, verified limits and stage-led controls.\n<!-- END: hmi-page-history -->';
 const page=renderContractArticle(s,overlay.base,{page:'wiki/ingredients/cassava.md',before:history,entry:{legacy_headings:[],candidate_source_ids:[]},fm,record}).content;
 if(/\b(?:P95|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI|Claude)\b/i.test(page))throw Error('Forbidden public remnant');
 return {page,record,reference:occurrence.record,parity:occurrence.parity,rows:occurrence.rows,unit_counts:occurrence.unit_counts};
 }finally{overlay.cleanup()}
}
export function buildIngredient({check=false}={}){const r=compileIngredient();
 const outputs={[candidatePath]:r.page,[recordPath]:JSON.stringify(r.record,null,2)+'\n',[`${auditDir}/comparator-admission.json`]:JSON.stringify(r.reference,null,2)+'\n',[`${auditDir}/row-parity.json`]:JSON.stringify(r.parity,null,2)+'\n'};
 for(const [f,c]of Object.entries(outputs)){if(check){if(!fs.existsSync(path.join(root,f))||read(f)!==c)throw Error(`Cassava output drift: ${f}`);}else{fs.mkdirSync(path.dirname(path.join(root,f)),{recursive:true});fs.writeFileSync(path.join(root,f),c);}}
 return {candidate:candidatePath,record:recordPath,rows:r.rows.length,mode:check?'check':'build'};}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){if(process.argv.slice(2).some(x=>x!=='--check'))throw Error('Only --check supported; central owns adoption.');console.log(JSON.stringify(buildIngredient({check:process.argv.includes('--check')}),null,2));}
