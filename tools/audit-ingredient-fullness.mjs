import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {isDeepStrictEqual} from 'node:util';
import {parse} from 'parse5';
import matter from 'gray-matter';
import {LIBRARY_MOUNT} from './lib/library-root.mjs';
import {evidenceLedgerSchema,terminalReasons,modes} from './contracts/ingredient-evidence-ledger.mjs';
import {loadIndependentCorpus,recomputeUniverse,sha256} from './ingredient-source-universe.mjs';
import {inspectIngredientPresentation} from './audit-ingredient-presentation.mjs';
const attrs=n=>Object.fromEntries((n?.attrs??[]).map(a=>[a.name,a.value]));
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const has=(n,k)=>Object.hasOwn(attrs(n),k);
const plain=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(plain).join(' ').replace(/\s+/g,' ').trim();
const count=xs=>xs.reduce((out,x)=>(out[x]=(out[x]??0)+1,out),{});
export const scopeKey=s=>JSON.stringify([s?.analyte,s?.material,s?.basis,s?.unit]);
export const frozenMembershipHash=units=>sha256(JSON.stringify([...units].sort((a,b)=>a.id.localeCompare(b.id)).map(u=>({id:u.id,item_id:u.item_id,family_id:u.family_id,scope:[u.scope?.analyte,u.scope?.material,u.scope?.basis,u.scope?.unit],statistic:u.statistic,value:u.value,lower_bound:u.lower_bound,upper_bound:u.upper_bound,locator:u.locator}))));
export function inspectFullnessHTML(html){
 const nodes=walk(parse(html));const rows=nodes.filter(n=>n.tagName==='tr'&&has(n,'data-occurrence-row')).map(n=>{
  const a=attrs(n),children=walk(n),comparison=children.find(c=>has(c,'data-comparison-state')),ca=attrs(comparison);let ancestor=n;while(ancestor&&!has(ancestor,'data-analyte-group'))ancestor=ancestor.parentNode;
  return {id:a.id??'',source_id:a['data-source']??'',analyte:attrs(ancestor)['data-analyte-group']??a['data-analyte']??'unknown',state:ca['data-comparison-state']??'missing',reason_code:ca['data-comparison-reason']??a['data-comparison-reason']??null,reference_id:ca['data-reference-id']??a['data-reference-id']??null};
 });
 const rendered_references=nodes.filter(n=>has(n,'data-baseline-reference-template')).map(n=>({id:attrs(n)['data-baseline-reference-template'],scope_text:plain((n.childNodes??[]).find(c=>c.tagName==='p'&&!attrs(c).class)),source_ids:[...new Set(walk(n).filter(c=>c.tagName==='a').map(c=>attrs(c).href?.match(/(?:^|\/)sources\/([^/#?]+)/)?.[1]).filter(Boolean))].sort()}));
 return {html_sha256:sha256(html),rows,rendered_references,source_ids:[...new Set(rows.map(r=>r.source_id))].sort(),presentation:inspectIngredientPresentation(html)};
}
export function buildFullnessScorecard(ingredient,universe,ledger,page){
 const resultsByID=new Map((ledger?.results??[]).map(r=>[r.id,r]));
 const by_analyte={};for(const row of page.rows){const a=by_analyte[row.analyte]??={rows:0,rated:0,direct:0,bounded:0,unavailable:0,missing:0,unavailable_reasons:{}};a.rows++;a[row.state]=(a[row.state]??0)+1;if(row.state==='unavailable'){const reason=row.reason_code??resultsByID.get(row.id)?.comparison?.reason_code??'MISSING_TERMINAL_REASON';a.unavailable_reasons[reason]=(a.unavailable_reasons[reason]??0)+1;}}
 return {schema_version:1,ingredient,html_sha256:page.html_sha256,universe_sha256:universe.sha256,universe_size:universe.items.length,universe_complete:!(universe.discovery_gaps?.length),universe_discovery_gaps:universe.discovery_gaps?.length??0,source_records:universe.source_records,dataset_rows:universe.dataset_rows,dispositions:count((ledger?.items??[]).map(i=>i.disposition)),extracted_results:ledger?ledger.results?.length??0:null,ledger_status:ledger?'present':'missing',rendered_rows:page.rows.length,rendered_row_ids:page.rows.map(r=>r.id).sort(),by_analyte,rendered_references:page.rendered_references??[],reference_families:ledger?(ledger.references??[]).map(r=>({id:r.id,scope:r.scope,family_ids:[...r.family_ids].sort(),unit_ids:[...r.unit_ids].sort()})).sort((a,b)=>a.id.localeCompare(b.id)):null};
}
export function evaluateIngredientFullness({ingredient,universe,ledger,page,scorecard,repo=process.cwd()}){
 const gates=Object.fromEntries(Array.from({length:7},(_,i)=>[i+1,{status:'pass',errors:[]}]));const fail=(g,msg)=>{gates[g].status='fail';gates[g].errors.push(msg);};
 const items=ledger?.items??[],results=ledger?.results??[],units=ledger?.reference_units??[],refs=ledger?.references??[];
 const itemsByID=new Map(items.map(i=>[i.id,i])),resultsByID=new Map(results.map(r=>[r.id,r])),unitsByID=new Map(units.map(u=>[u.id,u])),refsByID=new Map(refs.map(r=>[r.id,r]));
 const itemResultIDs=new Map(items.map(i=>[i.id,new Set(i.result_ids??[])]));
 const usedUnitIDs=new Set(results.flatMap(r=>r.reference_unit_ids??[]));
 const unitsByScope=Map.groupBy(units,u=>scopeKey(u.scope)),resultsByScope=Map.groupBy(results,r=>scopeKey(r.scope));
 const referenceScopes=new Set(refs.map(r=>scopeKey(r.scope))),renderedReferenceIDs=new Set((page.rendered_references??[]).map(r=>r.id));
 const ratedReferenceIDs=new Set(results.filter(r=>r.comparison?.state==='rated').map(r=>r.comparison.reference_id));
 const ids=items.map(i=>i.id),expected=universe.items.map(i=>i.id),missing=expected.filter(id=>!itemsByID.has(id));
 if(!ledger)fail(1,'Missing shared evidence ledger');
 if(universe.discovery_gaps?.length)fail(1,`${universe.discovery_gaps.length} unreadable/unsupported indexed primary exports prevent a complete independently verified universe`);
 if(ledger&&ledger.ingredient!==ingredient)fail(1,'Ledger ingredient does not match rendered ingredient');
 if(missing.length)fail(1,`${missing.length} independently discovered universe items missing: ${missing.slice(0,8).join(', ')}`);
 if(new Set(ids).size!==ids.length)fail(1,'Duplicate universe item IDs');
 const stale=universe.items.filter(u=>itemsByID.has(u.id)&&itemsByID.get(u.id).content_sha256!==u.sha256);if(stale.length)fail(1,`${stale.length} universe item content hashes stale`);
 if(!ledger){for(const g of [2,3,6])gates[g]={status:'blocked',errors:['Missing ledger: cannot establish compliance']};}
 else {
  const parsed=evidenceLedgerSchema.safeParse(ledger);if(!parsed.success)for(const issue of parsed.error.issues)fail(2,`${issue.path.join('.')}: ${issue.message}`);
  for(const i of items){
   if(!/^(occurrence_extracted|mitigation_extracted|exposure_or_regulatory_used|context_only|out_of_scope|access_blocked|duplicate_of:.+)$/.test(i.disposition??''))fail(2,`${i.id}: non-terminal disposition ${i.disposition}`);
   if(i.decision_basis!=='primary_text'||!i.locators?.length||i.locators.some(l=>!['page','table','cell'].includes(l.kind)||!l.location?.trim()||!l.artifact||!/^[a-f0-9]{64}$/.test(l.sha256??'')))fail(2,`${i.id}: primary-text locator/content disposition missing (title-only is invalid)`);
   if(i.disposition?.startsWith('duplicate_of:')&&(!itemsByID.has(i.disposition.slice(13))||i.id===i.disposition.slice(13)))fail(2,`${i.id}: invalid duplicate destination`);
   if(i.disposition?.startsWith('duplicate_of:')){const seen=new Set([i.id]);let next=i;while(next?.disposition?.startsWith('duplicate_of:')){const target=next.disposition.slice(13);if(seen.has(target)){fail(2,`${i.id}: duplicate disposition cycle`);break;}seen.add(target);next=itemsByID.get(target);}}
   if(i.disposition==='occurrence_extracted'&&(i.extraction_complete!==true||!i.result_ids?.length))fail(2,`${i.id}: exhaustive occurrence extraction not established`);
   if(i.disposition==='access_blocked'){
    for(const channel of ['mounted_library','raw','publisher_or_open_access','backup_library'])if(!i.retrieval_attempts?.some(a=>a.channel===channel&&Number.isFinite(Date.parse(a.attempted_at))&&a.location&&a.outcome))fail(3,`${i.id}: missing dated ${channel} retrieval attempt`);
    if(!i.retrieval_attempts?.some(a=>a.channel==='mounted_library'&&a.mounted===true&&(a.location===LIBRARY_MOUNT||a.location?.startsWith(LIBRARY_MOUNT+'/'))))fail(3,`${i.id}: HMI Library attempt must identify the actual mounted volume; backup/offline searches do not qualify`);
    if(!i.retrieval_request?.request||!Number.isFinite(Date.parse(i.retrieval_request?.requested_at)))fail(3,`${i.id}: missing dated retrieval request`);
   }
  }
 }
 const resultIDs=results.map(r=>r.id),rowIDs=page.rows.map(r=>r.id);
 if(new Set(resultIDs).size!==resultIDs.length||new Set(rowIDs).size!==rowIDs.length||!isDeepStrictEqual([...resultIDs].sort(),[...rowIDs].sort()))fail(4,`Exact result/row ID equality failed: extracted ${resultIDs.length}, rendered ${rowIDs.length}`);
 for(const i of items)for(const id of i.result_ids??[])if(!resultsByID.get(id)?.item_ids?.includes(i.id))fail(4,`${i.id}: result ${id} missing or does not route back to item`);
 for(const r of results){if(r.scope?.unit!==r.unit||r.scope?.basis!==r.basis)fail(2,`${r.id}: result unit/basis differs from reference scope`);if(!r.item_ids?.length||r.item_ids.some(id=>!(itemsByID.get(id)?.disposition==='occurrence_extracted'&&itemResultIDs.get(id)?.has(r.id))))fail(4,`${r.id}: unowned/non-extracted occurrence result`);}
 for(const row of page.rows){
  const r=resultsByID.get(row.id),c=r?.comparison;
  if(!['rated','direct','bounded','unavailable'].includes(row.state))fail(5,`${row.id}: invalid/missing rendered comparison state`);
  if(row.state==='unavailable'&&(!terminalReasons.includes(c?.reason_code)||(row.reason_code!==null&&c?.reason_code!==row.reason_code)))fail(5,`${row.id}: unavailable lacks matching terminal reason code in ledger and rendered row`);
  if(r&&row.source_id&&!r.item_ids?.some(id=>itemsByID.get(id)?.source_id===row.source_id))fail(4,`${row.id}: rendered source differs from extracted source ownership`);
  if(!c||c.state!==row.state||!isDeepStrictEqual(c.attempts?.map(a=>a.mode),modes))fail(5,`${row.id}: ordered HMI → direct → bounded comparison attempts missing or inconsistent`);
  if(row.reference_id!==null&&row.reference_id!==c?.reference_id)fail(6,`${row.id}: rendered reference differs from ledger`);
 }
 if(ledger){
  if(new Set(units.map(u=>u.id)).size!==units.length||new Set(refs.map(r=>r.id)).size!==refs.length)fail(6,'Duplicate reference/unit IDs');
  for(const r of results){for(const id of r.reference_unit_ids??[])if(!(unitsByID.get(id)?.family_id===r.family_id&&scopeKey(unitsByID.get(id)?.scope)===scopeKey(r.scope)))fail(6,`${r.id}: reference unit ${id} absent or scope/family mismatch`);if(r.comparison?.reference_id&&!refsByID.has(r.comparison.reference_id))fail(6,`${r.id}: unknown selected reference`);}
  for(const u of units){const lower=u.lower_bound??u.value,upper=u.upper_bound??u.value;if(!Number.isFinite(lower)||!Number.isFinite(upper)||lower<0||lower>upper)fail(6,`${u.id}: invalid reference value/bounds`);}
  for(const u of units){const item=itemsByID.get(u.item_id);if(!(item?.disposition==='occurrence_extracted'&&item.family_id===u.family_id)||!usedUnitIDs.has(u.id))fail(6,`${u.id}: unit not backed by extracted item/result`);}
  for(const scope of resultsByScope.keys())if(!referenceScopes.has(scope))fail(6,`Missing reference definition/assessment for scope ${scope}`);
  for(const rendered of page.rendered_references??[]){const ref=refsByID.get(rendered.id);if(!ref){fail(6,`${rendered.id}: rendered reference missing from ledger`);continue;}const admittedSources=[...new Set((ref.unit_ids??[]).map(id=>itemsByID.get(unitsByID.get(id)?.item_id)?.source_id).filter(Boolean))].sort();if(!isDeepStrictEqual(admittedSources,rendered.source_ids))fail(6,`${rendered.id}: rendered source membership differs from ledger`);}
  for(const r of results.filter(r=>r.comparison?.state==='rated'))if(!r.comparison.reference_id||!renderedReferenceIDs.has(r.comparison.reference_id))fail(6,`${r.id}: rated reference definition absent from rendered page`);
  for(const ref of refs){
   const key=scopeKey(ref.scope),compatible=unitsByScope.get(key)??[],scopeResults=resultsByScope.get(key)??[],admittedIDs=new Set(ref.unit_ids??[]),compatibleIDs=new Set(compatible.map(u=>u.id));
   const included=[...admittedIDs].map(id=>unitsByID.get(id)).filter(Boolean),families=[...new Set(included.map(u=>u.family_id))].sort(),familySet=new Set(families);
   const excludedUnits=new Set((ref.exclusions??[]).filter(e=>e.scientific_reason?.trim()&&e.locator?.location).map(e=>e.unit_id).filter(Boolean));
   const excludedResults=new Set((ref.exclusions??[]).filter(e=>e.scientific_reason?.trim()&&e.locator?.location).map(e=>e.result_id).filter(Boolean));
   if(!isDeepStrictEqual([...(ref.family_ids??[])].sort(),families))fail(6,`${ref.id}: family list differs from admitted units`);
   if([...admittedIDs].some(id=>!compatibleIDs.has(id)))fail(6,`${ref.id}: incompatible or unknown unit admitted`);
   if(ratedReferenceIDs.has(ref.id)&&included.length<4)fail(6,`${ref.id}: a rated HMI reference requires at least four observed reference units`);
   for(const u of compatible)if(!admittedIDs.has(u.id)&&!excludedUnits.has(u.id))fail(6,`${ref.id}: compatible unit ${u.id} omitted without scientific reason`);
   // Family evidence, not just already-chosen units, guards token one-family references.
   const extractedFamilies=[...new Set(scopeResults.map(r=>r.family_id))],unitFamilies=new Set(compatible.map(u=>u.family_id));
   for(const family of extractedFamilies.filter(f=>!familySet.has(f)))if(!unitFamilies.has(family)&&scopeResults.some(r=>r.family_id===family&&!excludedResults.has(r.id)))fail(6,`${ref.id}: ${families.length===1?'single-family reference':'reference'} overlooks compatible extracted family ${family}`);
   if(families.length===1){
    if(!ref.limitations?.some(s=>/only.*(?:compatible|eligible).*famil|(?:one|single).*(?:compatible|eligible).*famil|(?:one|single).*famil.*(?:compatible|eligible)/i.test(s)))fail(6,`${ref.id}: single-family limitation must state this is the only compatible family`);
    if(gates[1].status!=='pass'||gates[2].status!=='pass'||gates[3].status!=='pass')fail(6,`${ref.id}: single-family reference cannot be justified by incomplete ledger`);
   }
   if(ref.frozen_membership_sha256!==frozenMembershipHash(included))fail(6,`${ref.id}: frozen membership hash mismatch`);
   for(const field of ['sensitivity','leave_one_out']){const artifact=ref[field];if(!artifact?.artifact||!fs.existsSync(path.resolve(repo,artifact.artifact))||sha256(fs.readFileSync(path.resolve(repo,artifact.artifact)))!==artifact.sha256)fail(6,`${ref.id}: missing/stale ${field} artifact`);}
  }
 }
 const computed=buildFullnessScorecard(ingredient,universe,ledger,page);
 if(!scorecard)fail(7,'Missing builder fullness-scorecard.json');else if(!isDeepStrictEqual(scorecard,computed))fail(7,'Builder scorecard does not exactly match current universe, ledger and rendered HTML');
 return {ingredient,status:Object.values(gates).every(g=>g.status==='pass')?'pass':'fail',gates,scorecard:computed,presentation:page.presentation,source_records_in_table:page.source_ids.length};
}
export function findPublicFullnessArtifacts(root){
 const found=[];const visit=dir=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isSymbolicLink())continue;if(entry.isDirectory())visit(file);else if(/(?:evidence-ledger|fullness-scorecard|cross-page-scorecard)/i.test(entry.name))found.push(path.relative(root,file));}};visit(root);return found;
}
export function discoverIngredientPages(root,repo=process.cwd()){
 const dir=path.resolve(root,'ingredients'),pages=[];
 const visit=(folder,parts=[])=>{for(const entry of fs.readdirSync(folder,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){
  if(entry.isSymbolicLink())continue;
  const file=path.join(folder,entry.name),relative=[...parts,entry.name];
  if(entry.isDirectory()){if(!(parts.length===0&&entry.name==='categories'))visit(file,relative);continue;}
  if(!entry.name.endsWith('.html'))continue;
  const slug=relative.join('/').slice(0,-5);if(slug==='index')continue;
  const source=path.join(repo,'wiki/ingredients',slug+'.md');
  if(fs.existsSync(source)&&matter(fs.readFileSync(source,'utf8')).data.type==='category-index')continue;
  // Legacy ingredient pages remain in scope even without canonical markers/frontmatter.
  if(fs.readFileSync(file,'utf8').includes(`data-slug="ingredients/${slug}"`))pages.push(slug);
 }};
 if(fs.existsSync(dir))visit(dir);return pages;
}
export function auditIngredientFullness({root='public',repo=process.cwd(),ingredients,output}={}){
 if(output){const out=path.resolve(output);for(const forbidden of [path.resolve(root),path.resolve(repo,'public'),path.resolve(repo,'wiki')])if(out===forbidden||out.startsWith(forbidden+path.sep))throw Error('Fullness audits must remain internal; public/wiki output is forbidden');}
 const internal_artifacts=findPublicFullnessArtifacts(root);
 const dir=path.resolve(root,'ingredients');
 const slugs=ingredients??discoverIngredientPages(root,repo);
 if(!slugs.length)throw Error('Cannot accept an empty ingredient fullness audit');
 const corpus=loadIndependentCorpus(repo,{ingredients:slugs});
 const pages=slugs.map(ingredient=>{const universe=recomputeUniverse(corpus,ingredient),base=path.join(repo,'data/evidence/contracts',ingredient),read=name=>{const f=path.join(base,name);return fs.existsSync(f)?JSON.parse(fs.readFileSync(f,'utf8')):undefined;};
  const page=inspectFullnessHTML(fs.readFileSync(path.join(dir,ingredient+'.html'),'utf8'));const result=evaluateIngredientFullness({ingredient,universe,ledger:read('evidence-ledger.json'),scorecard:read('fullness-scorecard.json'),page,repo});
  if(output){fs.mkdirSync(output,{recursive:true});fs.writeFileSync(path.join(output,ingredient+'-universe.json'),JSON.stringify(universe,null,2)+'\n');}
  return result;});
 const report={schema_version:1,generated_at:new Date().toISOString(),artifact_root:path.resolve(root),status:!internal_artifacts.length&&pages.every(p=>p.status==='pass')?'pass':'fail',internal_artifacts,pages};
 if(output)fs.writeFileSync(path.join(output,'cross-page-scorecard.json'),JSON.stringify(report,null,2)+'\n');return report;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2),root=args[0]??'public',get=flag=>args.includes(flag)?args[args.indexOf(flag)+1]:undefined;
 const report=auditIngredientFullness({root,ingredients:get('--ingredients')?.split(','),output:get('--output')});console.log(JSON.stringify(report,null,2));if(report.status!=='pass')process.exitCode=1;
}
