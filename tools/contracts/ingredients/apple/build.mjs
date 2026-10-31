import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';import matter from 'gray-matter';
import {renderContractArticle,questionRecord,ingredientPresentationVersion} from '../../pilot/compiler.mjs';
import {validateSentenceCitationPlacements} from '../../pilot/sentence-citations.mjs';
import {renderControlsFromRecords} from '../../pilot/mitigation-table.mjs';
import {appleOccurrence,appleOptions,auditDir} from './source-adapter.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..');
export {auditDir};export const candidatePath=`${auditDir}/candidate/apple.md`;export const synthesisPath='data/evidence/syntheses/ingredient-apple-v1.json';export const recordPath='data/evidence/questions/ingredient/apple.json';
const read=f=>fs.readFileSync(path.join(root,f),'utf8'),json=f=>JSON.parse(read(f)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
// Shared source records are pinned: the candidate fails if any cited record changes underneath it.
export function sourcePins(s){const keys=new Set();const walk=v=>{if(v&&typeof v==='object'){for(const k of v.source_keys||[])keys.add(k);Object.values(v).forEach(walk)}};walk(s);return [...keys].sort().map(k=>({source_id:k,path:`wiki/sources/${k}.md`,sha256:sha(read(`wiki/sources/${k}.md`))}))}
export function compileIngredient(){
 const baseline=json(`${auditDir}/baseline.json`),before=read(baseline.baseline);if(sha(before)!==baseline.sha256)throw Error('Apple frozen baseline changed');
 for(const p of json(`${auditDir}/source-review.json`).checks)if(sha(read(p.path))!==p.sha256)throw Error(`Apple shared source drift: ${p.path}`);
 const s=json(synthesisPath);validateSentenceCitationPlacements(s);const record=questionRecord(s,root);
 for(const sec of s.sections){const a=record.answers.find(x=>x.question_id===sec.answers[0].question_id);a.answer+='\n\nVisible findings overview: '+[sec.presentation,...sec.presentation.passages].map(x=>x.text).join('\n\n');a.evidence_refs=[...new Set([...a.evidence_refs,...[sec.presentation,...sec.presentation.passages].flatMap(x=>x.source_keys.map(k=>`wiki/sources/${k}.md`))])];}
 const occurrence=appleOccurrence(root);
 s.sections.find(x=>x.id==='occurrence').observations={rows:occurrence.rows,options:appleOptions};
 s.sections.find(x=>x.id==='controls').additional_markdown=renderControlsFromRecords(json(`${auditDir}/interventions.json`).records);
 const fm={...matter(before).data};for(const k of ['contamination_profile','drivers','lower_risk_variants','higher_risk_variants','used_in_products','tds_food','created_by','created_from','created_routed_sources'])delete fm[k];
 const refs=new Set(sourcePins(s).map(p=>p.source_id)),research=[...refs].filter(k=>!/^(eu-|hongkong|codex|fda|who-|fsanz|chinanhc|cfs|bfr|atsdr)/.test(k)).length,official=refs.size-research;
 Object.assign(fm,{page_contract_version:'1.0.0',question_record:recordPath,synthesis_record:synthesisPath,evidence_coverage:'partial',ingredient_presentation:ingredientPresentationVersion,updated:s.date,sources:refs.size,description:s.description,dek:s.description,section_headings:s.section_headings,ingredient_faq_heading:s.universal_faqs.title});
 const labels={summary:'Summary',identity:'Scope',occurrence:'Profile',pathways:'Pathways',variation:'Variation',processing:'Processing',controls:'Mitigation',tradeoffs:'Trade-offs',testing:'Testing',procurement:'Procurement',product:'Exposure',assessment:'Review'};fm.toc_labels={...Object.fromEntries(Object.entries(s.section_headings).map(([k,v])=>[v,labels[k]])),[s.universal_faqs.title]:'FAQs'};
 fm.ingredient_chrome={title:s.title,slug:s.slug,description:s.description,updated:s.date,reference_count:refs.size,snapshot:[{label:'Research sources referenced',count:research},{label:'Official guidance and instruments',count:official}],key_evidence:[
  {label:'Exposure',text:'No verified estimate of metal intake from fresh apples exists; US total diet apples were below detection for lead and cadmium.',href:'#exposure-from-apples',link_label:'Exposure'},
  {label:'Limits',text:'The EU limits fruit to 0.10 mg/kg lead and pome fruit to 0.020 mg/kg cadmium; China sets 0.5 mg/kg lead for dried fruit.',href:'#buying-and-verifying-apples',link_label:'Limits by market'},
  {label:'Key distinction',text:'Apples reported from the Americas measured lowest in lead; older Western Pacific submissions and dried apple ran higher.',href:'#which-apples-and-markets-measured-lower',link_label:'Variation'}]};
 const history='<!-- BEGIN: hmi-page-history -->\n## Update history\n\n22 October 2026 — Rebuilt from every apple record in the library: WHO GEMS/Food and FDA Total Diet Study monitoring results, 26 market, orchard and diet studies, pooled apple comparisons, verified limits and stage-led controls.\n<!-- END: hmi-page-history -->';
 const page=renderContractArticle(s,root,{page:'wiki/ingredients/apple.md',before:history,entry:{legacy_headings:baseline.legacy_headings.filter(h=>! /routing|contamination profile state|fda tds/i.test(h)),candidate_source_ids:[]},fm,record}).content;
 if(/\b(?:P95|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI|Claude)\b/i.test(page))throw Error('Forbidden public remnant');
 return {page,record,reference:occurrence.record,parity:occurrence.parity,rows:occurrence.rows,unit_counts:occurrence.unit_counts};
}
export function buildIngredient({check=false}={}){const r=compileIngredient();
 const outputs={[candidatePath]:r.page,[recordPath]:JSON.stringify(r.record,null,2)+'\n',[`${auditDir}/comparator-admission.json`]:JSON.stringify(r.reference,null,2)+'\n',[`${auditDir}/row-parity.json`]:JSON.stringify(r.parity,null,2)+'\n'};
 for(const [f,c]of Object.entries(outputs)){if(check){if(!fs.existsSync(path.join(root,f))||read(f)!==c)throw Error(`Apple output drift: ${f}`);}else{fs.mkdirSync(path.dirname(path.join(root,f)),{recursive:true});fs.writeFileSync(path.join(root,f),c);}}
 return {candidate:candidatePath,record:recordPath,rows:r.rows.length,mode:check?'check':'build'};}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){if(process.argv.slice(2).some(x=>x!=='--check'))throw Error('Only --check supported; central owns adoption.');console.log(JSON.stringify(buildIngredient({check:process.argv.includes('--check')}),null,2));}
