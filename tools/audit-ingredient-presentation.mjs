import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {parse} from 'parse5';
import existingIngredientPaths from '../data/evidence/contracts/ingredient-rollout-2026-10-22/existing-ingredient-paths.json' with {type:'json'};
const transitionFile=new URL('../data/evidence/contracts/grouped-table-transition.json',import.meta.url);
const groupedTableTransition=new Set(fs.existsSync(transitionFile)?JSON.parse(fs.readFileSync(transitionFile,'utf8')).pages:[]);
const attrs=n=>Object.fromEntries((n.attrs??[]).map(a=>[a.name,a.value]));
const has=(n,c)=>(attrs(n).class??'').split(/\s+/).includes(c);
function descendants(n){return [n,...(n.childNodes??[]).flatMap(descendants)]}
export function inspectIngredientPresentation(html) {
 const nodes=descendants(parse(html)),errors=[];
 const canonical=nodes.some(n=>attrs(n)['data-ingredient-presentation']==='rice-shared-v1');
 const body=nodes.find(n=>n.tagName==='body'),slug=attrs(body??{})['data-slug']??'';
 // Rice keeps its frozen, user-approved hero instead of the adapter marker.
 if(!canonical&&slug!=='ingredients/rice')return {applicable:false,errors};
 const quick=nodes.find(n=>has(n,'hmi-quick-read'));
 if(!quick)errors.push('Quick Read panel missing');
 if(quick)for(const link of descendants(quick).filter(n=>n.tagName==='a')){
  let p=link.parentNode,citation=/\/(?:sources)\//.test(attrs(link).href??'') && Object.hasOwn(attrs(link),'data-authors') && Object.hasOwn(attrs(link),'data-title');
  while(p&&p!==quick){if(p.tagName==='sup'&&has(p,'cite'))citation=true;p=p.parentNode}
  if(!citation)errors.push('Quick Read contains a contextual link: '+attrs(link).href);
 }
 const hero=nodes.find(n=>has(n,'hero-band'));
 const image=hero&&descendants(hero).find(n=>has(n,'hero-background'));
 if(!image||!attrs(image).src)errors.push('Original hero image missing');
 const occurrence=nodes.filter(n=>attrs(n)['data-comparison-state']);
 const meaningful=occurrence.filter(n=>['rated','direct'].includes(attrs(n)['data-comparison-state'])).length;
 if(!meaningful)errors.push('Occurrence table has no usable rated or direct comparator; review/recover compatible reference evidence before publication');
 // Owner instruction 22 Oct 2026: comparison cells hold only the button(s) and the information icon,
 // and a note repeated in every occurrence row belongs in the column's information icon.
 const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
 for(const cell of nodes.filter(n=>n.tagName==='td'&&attrs(n)['data-label']==='Comparison'&&descendants(n.parentNode??{}).length&&Object.hasOwn(attrs(n.parentNode??{}),'data-occurrence-row'))){
  const visible=(cell.childNodes??[]).filter(c=>!(c.nodeName==='#text'&&!c.value.trim()));
  if(visible.some(c=>!(c.tagName==='span'&&has(c,'hmi-comparison-controls'))))errors.push('Comparison cell contains content besides the comparison button(s) and information icon');
  for(const ctl of visible.filter(c=>c.tagName==='span'&&has(c,'hmi-comparison-controls')))if((ctl.childNodes??[]).some(c=>!(c.tagName==='button'||(c.nodeName==='#text'&&!c.value.trim()))))errors.push('Comparison controls contain text besides buttons and the information icon');
 }
 const occRows=nodes.filter(n=>n.tagName==='tr'&&Object.hasOwn(attrs(n),'data-occurrence-row'));
 // Owner instruction 23 Oct 2026: the contamination profile is the grouped table (metal, then
 // food form, spread figures folded into their central row). Pages published flat before the
 // rule may stay flat until rebuilt (data/evidence/contracts/grouped-table-transition.json).
 if(occRows.length){
  const formHeads=nodes.filter(n=>n.tagName==='tr'&&has(n,'hmi-form-group'));
  if(!formHeads.length&&!groupedTableTransition.has(slug))errors.push('Occurrence table is flat; the canonical grouped table (food-form headers, folded spread figures) is required');
  if(formHeads.length){
   if(nodes.some(n=>n.tagName==='code'&&(()=>{let p=n.parentNode;while(p){if(p.tagName==='tr'&&has(p,'hmi-analyte-group'))return true;p=p.parentNode}return false})()))errors.push('Metal group heading shows a chemical symbol');
   const byId=new Map(occRows.map(r=>[attrs(r).id,r]));
   for(const r of occRows){
    const a=attrs(r);
    if(!a['data-form']||!a['data-level'])errors.push(`Occurrence row ${a.id} lacks its food form or level`);
    if(Object.hasOwn(a,'hidden')&&!a['data-folded-into'])errors.push(`Occurrence row ${a.id} is hidden without being folded into a central row`);
    if(a['data-folded-into']){const t=byId.get(a['data-folded-into']);if(!t||attrs(t)['data-folded-into'])errors.push(`Folded row ${a.id} points at a missing or folded row`);if(!Object.hasOwn(a,'hidden'))errors.push(`Folded row ${a.id} is not hidden`);}
   }
  }
 }
 if(occRows.length>1){const counts=new Map();for(const r of occRows){const scope=descendants(r).find(n=>n.tagName==='td'&&attrs(n)['data-label']==='Collection scope');for(const t of new Set(descendants(scope??{}).filter(n=>has(n,'hmi-row-note')).map(n=>text(n).trim()).filter(Boolean)))counts.set(t,(counts.get(t)??0)+1);}
  for(const [t,c] of counts)if(c*2>occRows.length)errors.push(`${c} of ${occRows.length} occurrence rows repeat the scope note "${t}"; state it once in the column's information icon`);}
 const mitigation=nodes.find(n=>n.tagName==='table'&&has(n,'hmi-mitigation-table'));
 const controls=mitigation?descendants(mitigation).filter(n=>n.tagName==='tr'&&Object.hasOwn(attrs(n),'data-mitigation-row')).length:0;
 // Coordinator decision (23 Oct 2026): a page with no applicable cited control states that gap
 // plainly in an element marked data-mitigation-gap and records it in thin-page.json
 // (reason no_applicable_cited_control). Uncited generic controls never stand in for evidence.
 const gap=nodes.find(n=>Object.hasOwn(attrs(n),'data-mitigation-gap'));
 if(!controls&&!(gap&&text(gap).trim().length>=40))errors.push('Source-supported mitigation table missing or empty');
 return {applicable:true,slug,meaningful_comparator_rows:meaningful,mitigation_rows:controls,errors};
}
export function auditIngredientPresentation(root='public'){
 const reports=[];for(const name of fs.readdirSync(path.join(root,'ingredients'))){
  if(!name.endsWith('.html'))continue;
  const report=inspectIngredientPresentation(fs.readFileSync(path.join(root,'ingredients',name),'utf8'));
  if(report.applicable)reports.push({file:name,...report});
  else if(!existingIngredientPaths.slugs.includes(name.slice(0,-5)))reports.push({file:name,applicable:true,errors:['New ingredient output bypasses the mandatory canonical compiler/presentation gate']});
 }
 if(!reports.length)throw Error('No canonical ingredient pages found; cannot accept an empty publication audit');
 return {status:reports.some(r=>r.errors.length)?'fail':'pass',pages:reports};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const report=auditIngredientPresentation(process.argv[2]??'public');
 console.log(JSON.stringify(report,null,2));if(report.status!=='pass')process.exitCode=1;
}
