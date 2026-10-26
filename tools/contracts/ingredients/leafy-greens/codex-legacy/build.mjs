import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';import matter from 'gray-matter';
import {renderContractArticle,questionRecord,ingredientPresentationVersion} from '../../pilot/compiler.mjs';
import {analyteNames} from '../../pilot/analyte-table.mjs';
import * as mitigation from '../../pilot/mitigation-table.mjs';
import {validateRecord} from '../../validate.mjs';
import {leafyOccurrenceRows,leafyOccurrenceOptions,leafyOccurrenceEvidence} from './source-adapter.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..');
export const auditDir='data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens';
export const candidatePath=`${auditDir}/candidate/leafy-greens.md`;
export const recordPath='data/evidence/questions/ingredient/leafy-greens.json';
const synthesisPath='data/evidence/syntheses/ingredient-leafy-greens-v1.json';
const read=f=>fs.readFileSync(path.join(root,f),'utf8'),json=f=>JSON.parse(read(f)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
export function compileIngredient(){
 const baseline=json(`${auditDir}/baseline.json`),before=read(`${auditDir}/baseline.md`);
 if(sha(before)!==baseline.sha256)throw Error('Frozen Leafy greens baseline changed');
 for(const pin of json(`${auditDir}/source-checks.json`)){
  if(sha(read(pin.path))!==pin.sha256)throw Error(`Shared source drift: ${pin.path}`);
  if(sha(fs.readFileSync(path.join(root,pin.primary_artifact)))!==pin.primary_sha256)throw Error(`Primary artifact changed: ${pin.primary_artifact}`);
 }
 const s=json(synthesisPath),findings=json(`${auditDir}/occurrence-findings.json`),controls=json(`${auditDir}/interventions.json`).records;
 const blockers=[];
 const rows=leafyOccurrenceRows(findings).filter(r=>{
  if(!analyteNames[r.analyte]){if(!blockers.some(b=>b.id==='analyte-label'))blockers.push({id:'analyte-label',reason:`Shared analyteNames lacks ${r.analyte}; affected rows withheld from candidate table, retained in source evidence and cited prose.`});return false;}return true;
 });
 s.sections.find(x=>x.id==='occurrence').presentation.narrative='evidence_drawer';
 for(const a of s.sections.find(x=>x.id==='occurrence').answers)delete a.presentation;
 s.sections.find(x=>x.id==='occurrence').observations={rows,options:leafyOccurrenceOptions};
 const renderControlRecords=mitigation.renderControlsFromRecords||mitigation.renderIngredientControls;
 if(renderControlRecords)s.sections.find(x=>x.id==='controls').additional_markdown=renderControlRecords(controls);
 else blockers.push({id:'mitigation-records-api',reason:'Shared Rice stage-led mitigation component has no exported renderer accepting ingredient-specific records; four verified paired wash comparisons remain in the evidence record, with central export requested.'});
 s.scope={analytes:'Source-specific totals; no total-to-species substitution',material_form:'Named edible leafy vegetables and explicitly included culinary leaves; commercial derivatives distinct',basis:'Source-specific dry or fresh basis; mass units only converted for table display',geography_market:'Johannesburg; Galați County; Selangor collection markets/areas, not a growing-country ranking',period:'Romania August 2020–December 2021; Selangor 19 October–2 November 2022; Johannesburg collection dates unreported',stage:'Cultivation/market handling and specified washing preparations',population_route:'Dietary ingestion; no individualized or infant risk inference',comparator_outcome:'Within-study named group/type mean contrasts; scoped same-study aluminium vegetable-type mean positions; no raw-sample or cross-study distribution'};
 s.search={status:'in_progress',scope:'Existing Leafy greens candidate records and selected primary paper re-verification; no systematic whole-literature search',protocol_ref:`${auditDir}/plan.json`,record_refs:[`${auditDir}/source-checks.json`,`${auditDir}/legacy-dispositions.json`],screening_ref:`${auditDir}/legacy-dispositions.json`,searched_through:null,limitations:['Remaining legacy candidates not fully screened','Current primary legal applicability incomplete','Outcome-level certainty appraisal incomplete','Commercial controls and derivatives not fully assessed'],unresolved_access:[]};
 const record=questionRecord(s,root);
 for(const a of record.answers)if(['HMI-ING-008','HMI-ING-014','HMI-ING-019','HMI-ING-020','HMI-ING-021'].includes(a.question_id))a.search={...a.search,unresolved_access:['Bora 2022 supplementary inventory at publisher s1 URL: HTTP 403 on 22 October 2026; independent lettuce/treatment sample counts remain unresolved.'],record_refs:[...a.search.record_refs,`${auditDir}/primary/bora-supplement-access.json`]};
 const errors=validateRecord(record);if(errors.length)throw Error(errors.join('\n'));
 const old=matter(before).data;
 const labels={summary:'Summary',identity:'Scope',occurrence:'Profile',pathways:'Pathways',variation:'Variation',processing:'Processing',controls:'Mitigation',tradeoffs:'Trade-offs',testing:'Testing',procurement:'Procurement',product:'Exposure',assessment:'Review'};
 const fm={title:s.title,type:'ingredient',commodity:'leafy-greens',label:s.title,aliases:old.aliases,used_in_products:old.used_in_products,audience:old.audience,updated:s.date,sources:3,
  contamination_profile:Object.fromEntries(Object.keys(old.contamination_profile).map(k=>[k,{status:'in_progress',typical_ppb:[null,null],confidence:null,n_studies:null,last_reviewed:null}])),drivers:[],lower_risk_variants:[],higher_risk_variants:[],
  page_contract_version:'1.0.0',question_record:recordPath,synthesis_record:synthesisPath,evidence_coverage:'partial',ingredient_presentation:ingredientPresentationVersion,section_headings:s.section_headings,ingredient_faq_heading:s.universal_faqs.title,
  toc_labels:{...Object.fromEntries(Object.entries(s.section_headings).map(([k,v])=>[v,labels[k]])),...s.toc_labels},description:s.description,dek:s.description,
  ingredient_chrome:{title:s.title,slug:s.slug,description:s.description,updated:s.date,reference_count:3,snapshot:[{label:'Research papers referenced',count:3}],key_evidence:[{label:'Exposure',text:'Concentration and adult exposure models do not establish an individual safe serving.',href:'#finished-products-and-dietary-exposure',link_label:'Exposure context'},{label:'Limits',text:'Applicable rules depend on the food, analyte, form and sales market.',href:'#evidence-review-and-remaining-questions',link_label:'Evidence review'},{label:'Key distinction',text:'Fresh and dry leaf results retain separate bases; non-detects are not zero.',href:'#heavy-metal-contamination-profile-of-leafy-greens',link_label:'Source findings'}]}};
 // Retain useful scientific fragments; obsolete routing/process fragments remain private in baseline.
 const entry={legacy_headings:baseline.legacy_headings.filter(h=>! /routing|contamination profile state/i.test(h)),candidate_source_ids:[]};
 const history='<!-- BEGIN: hmi-page-history -->\n## Update history\n\n**22 October 2026 — Leafy vegetable findings updated.** Added source-specific market and washing comparisons, distinguished measurement bases and clarified the limits of dietary and sourcing interpretations.\n<!-- END: hmi-page-history -->';
 const page=renderContractArticle(s,root,{page:'wiki/ingredients/leafy-greens.md',before:history,entry,fm,record}).content;
 if(page.includes('No matched time series'))blockers.push({id:'source-scope-label',reason:'Shared comparisonState falls back to a time-series label for source_scope findings. The candidate must receive the shared neutral source-scope label before release.'});
 if(/\b(?:P95|HMTc|HMT&C|ChatGPT|OpenAI|Codex AI)\b/i.test(page))throw Error('Forbidden public text');
 return {page,record,blockers,table_rows:rows.length,total_occurrence_rows:findings.rows.length,control_comparisons:renderControlRecords?controls.length:0,faqs:json(`${auditDir}/faq-bank-dispositions.json`).selected_count};
}
export function buildIngredient({check=false}={}){
 const r=compileIngredient(),evidence=leafyOccurrenceEvidence(json(`${auditDir}/occurrence-findings.json`)),outputs={[candidatePath]:r.page,[recordPath]:JSON.stringify(r.record,null,2)+'\n',[`${auditDir}/targeted-comparator-admissions.json`]:JSON.stringify({hmi:evidence.record,direct:evidence.direct},null,2)+'\n'};
 for(const [file,content]of Object.entries(outputs))if(check){if(!fs.existsSync(path.join(root,file))||read(file)!==content)throw Error(`Leafy greens output drift: ${file}`);}else{fs.mkdirSync(path.dirname(path.join(root,file)),{recursive:true});fs.writeFileSync(path.join(root,file),content);}
 return {candidate:candidatePath,record:recordPath,mode:check?'check':'build',table_rows:r.table_rows,total_occurrence_rows:r.total_occurrence_rows,control_comparisons:r.control_comparisons,faqs:r.faqs,presentation_blockers:r.blockers};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 if(process.argv.slice(2).some(a=>a!=='--check'))throw Error('Only --check is supported. Central coordinator owns integration and deployment.');
 console.log(JSON.stringify(buildIngredient({check:process.argv.includes('--check')}),null,2));
}
