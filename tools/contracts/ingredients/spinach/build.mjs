import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';import matter from 'gray-matter';
import {renderContractArticle,questionRecord,ingredientPresentationVersion} from '../../pilot/compiler.mjs';
import {validateSentenceCitationPlacements} from '../../pilot/sentence-citations.mjs';
import {renderControlsFromRecords} from '../../pilot/mitigation-table.mjs';
import {spinachOccurrence,spinachOptions,auditDir} from './source-adapter.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..');
export {auditDir};export const candidatePath=`${auditDir}/candidate/spinach.md`;export const synthesisPath='data/evidence/syntheses/ingredient-spinach-v1.json';export const recordPath='data/evidence/questions/ingredient/spinach.json';
const read=f=>fs.readFileSync(path.join(root,f),'utf8'),json=f=>JSON.parse(read(f)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
// Shared source records are pinned: the candidate fails if any cited record changes underneath it.
export function sourcePins(s){const keys=new Set();const walk=v=>{if(v&&typeof v==='object'){for(const k of v.source_keys||[])keys.add(k);Object.values(v).forEach(walk)}};walk(s);return [...keys].sort().map(k=>({source_id:k,path:`wiki/sources/${k}.md`,sha256:sha(read(`wiki/sources/${k}.md`))}))}
export function compileIngredient(){
 const baseline=json(`${auditDir}/baseline-claude.json`),before=read(baseline.baseline);if(sha(before)!==baseline.sha256)throw Error('Spinach frozen baseline changed');
 for(const p of json(`${auditDir}/source-review.json`).checks)if(sha(read(p.path))!==p.sha256)throw Error(`Spinach shared source drift: ${p.path}`);
 const s=json(synthesisPath);validateSentenceCitationPlacements(s);const record=questionRecord(s,root);
 for(const sec of s.sections){const a=record.answers.find(x=>x.question_id===sec.answers[0].question_id);a.answer+='\n\nVisible findings overview: '+[sec.presentation,...sec.presentation.passages].map(x=>x.text).join('\n\n');a.evidence_refs=[...new Set([...a.evidence_refs,...[sec.presentation,...sec.presentation.passages].flatMap(x=>x.source_keys.map(k=>`wiki/sources/${k}.md`))])];}
 const occurrence=spinachOccurrence(root);
 s.sections.find(x=>x.id==='occurrence').observations={rows:occurrence.rows,options:spinachOptions};
 s.sections.find(x=>x.id==='controls').additional_markdown=renderControlsFromRecords(json(`${auditDir}/interventions.json`).records);
 const fm={...matter(before).data};for(const k of ['contamination_profile','drivers','lower_risk_variants','higher_risk_variants','tds_food','created_by','created_from','created_routed_sources'])delete fm[k];
 const refs=new Set(sourcePins(s).map(p=>p.source_id)),official=[...refs].filter(k=>/^(eu-|eu20|hongkong|cfs20|mercosur|usda-fas|codex|fda|who-|fsanz|efsa|jecfa|mfds|us-house)/.test(k)).length,research=refs.size-official;
 Object.assign(fm,{page_contract_version:'1.0.0',question_record:recordPath,synthesis_record:synthesisPath,evidence_coverage:'partial',ingredient_presentation:ingredientPresentationVersion,updated:s.date,sources:refs.size,description:s.description,dek:s.description,section_headings:s.section_headings,ingredient_faq_heading:s.universal_faqs.title});
 const labels={summary:'Summary',identity:'Scope',occurrence:'Profile',pathways:'Pathways',variation:'Variation',processing:'Processing',controls:'Mitigation',tradeoffs:'Trade-offs',testing:'Testing',procurement:'Procurement',product:'Exposure',assessment:'Review'};fm.toc_labels={...Object.fromEntries(Object.entries(s.section_headings).map(([k,v])=>[v,labels[k]])),[s.universal_faqs.title]:'FAQs'};
 fm.ingredient_chrome={title:s.title,slug:s.slug,description:s.description,updated:s.date,reference_count:refs.size,snapshot:[{label:'Research sources referenced',count:research},{label:'Official guidance and instruments',count:official}],key_evidence:[
  {label:'Exposure',text:'Spinach in US market composites had a cadmium median of 200 µg/kg; 10 of 27 were above 0.20 mg/kg.',href:'#spinach-in-foods-and-dietary-exposure',link_label:'Exposure'},
  {label:'Limits',text:'EU limits for spinach: cadmium 0.20 mg/kg, lead 0.30 mg/kg, nickel 0.50 mg/kg (leafy vegetables), wet weight.',href:'#sourcing-and-supplier-evidence',link_label:'Limits by market'},
  {label:'Key distinction',text:'Spinach from polluted or wastewater-irrigated fields carried several times more cadmium, lead and nickel than spinach from clean fields.',href:'#lower-measured-levels-by-site-region-and-type',link_label:'Variation'}]};
 const history='<!-- BEGIN: hmi-page-history -->\n## Update history\n\n22 October 2026 — Rebuilt from every spinach record in the library: WHO GEMS/Food and FDA monitoring results by form, total diet studies, market, farm and wastewater-site surveys, pooled spinach references, verified limits and stage-led controls.\n<!-- END: hmi-page-history -->';
 const page=renderContractArticle(s,root,{page:'wiki/ingredients/spinach.md',before:history,entry:{legacy_headings:baseline.legacy_headings.filter(h=>! /routing|contamination profile state|fda tds/i.test(h)),candidate_source_ids:[]},fm,record}).content;
 if(/\b(?:P95|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI|Claude)\b/i.test(page))throw Error('Forbidden public remnant');
 return {page,record,reference:occurrence.record,parity:occurrence.parity,rows:occurrence.rows};
}
export function buildIngredient({check=false}={}){const r=compileIngredient();
 const outputs={[candidatePath]:r.page,[recordPath]:JSON.stringify(r.record,null,2)+'\n',[`${auditDir}/comparator-admission.json`]:JSON.stringify(r.reference)+'\n',[`${auditDir}/row-parity.json`]:JSON.stringify(r.parity,null,1)+'\n'};
 for(const [f,c]of Object.entries(outputs)){if(check){if(!fs.existsSync(path.join(root,f))||read(f)!==c)throw Error(`Spinach output drift: ${f}`);}else{fs.mkdirSync(path.dirname(path.join(root,f)),{recursive:true});fs.writeFileSync(path.join(root,f),c);}}
 return {candidate:candidatePath,record:recordPath,rows:r.rows.length,bytes:Buffer.byteLength(r.page),mode:check?'check':'build'};}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){if(process.argv.slice(2).some(x=>x!=='--check'))throw Error('Only --check supported; central owns adoption.');console.log(JSON.stringify(buildIngredient({check:process.argv.includes('--check')}),null,2));}
