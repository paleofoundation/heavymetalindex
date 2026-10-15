#!/usr/bin/env node
// S-DOI-1: deterministic, staff-only lookup. No occurrence inputs, minting or source-cell writes.
// Applicability comes from the named compiled candidate set; this is NOT a worldwide legal search.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const PANEL = ['Pb','Cd','tAs','iAs','tHg','MeHg','Ni','Sn','Al','Cr','Cr-VI'];
export const KINDS = ['regulatory-alignment','read-across','subsumed','precautionary','not-material','control','baseline-screen'];
const PARENT = { iAs:'tAs', MeHg:'tHg', 'Cr-VI':'Cr' };
const MAP = {gov:'regulatory-alignment',read_across:'read-across',not_material:'not-material',baseline_screen:'baseline-screen'};
const numeric = x => typeof x === 'number' && Number.isFinite(x) && x >= 0;
const hash = x => crypto.createHash('sha256').update(x).digest('hex');
const metal = x => x === 'Cr-total' ? 'Cr' : x;
const equal = (a,b) => Math.abs(a-b) <= Math.max(1,Math.abs(a),Math.abs(b))*1e-10;

export function parseCSV(text) {
  const rows=[]; let row=[], field='', quoted=false;
  for(let i=0;i<text.length;i++) {
    const ch=text[i];
    if(quoted) { if(ch==='"' && text[i+1]==='"'){field+='"';i++;} else if(ch==='"')quoted=false;else field+=ch; }
    else if(ch==='"')quoted=true;
    else if(ch===','){row.push(field);field='';}
    else if(ch==='\n'){row.push(field);if(row.some(Boolean))rows.push(row);row=[];field='';}
    else if(ch!=='\r')field+=ch;
  }
  if(quoted)throw new Error('Unclosed CSV quote');
  if(field.length||row.length){row.push(field);rows.push(row);}
  const heads=rows.shift()||[];
  return rows.map((r,i)=>{if(r.length!==heads.length)throw new Error(`CSV row ${i+2}: ${r.length} fields, expected ${heads.length}`);return Object.fromEntries(heads.map((h,j)=>[h,r[j]]));});
}
export function kindOf(c={}) {
  let kind=c.type||c.cell_kind||c.provenance||c.provenance_tag;
  if(kind==='screen')kind=c.source_id&&!c.binding_id?'read_across':'gov';
  if(kind==='form_split'||kind==='special')kind=c.provenance||c.provenance_tag||'regulatory-alignment';
  kind=MAP[kind]||kind;
  return KINDS.includes(kind)?kind:null;
}
export function statusProblem(row, asOf) {
  const s=row.status||'';
  if(/draft|not for implementation|proposed|quarantin|withdrawn|superseded|repealed|pesticide|residue level/i.test(s))return `excluded regulatory status: ${s}`;
  const date=s.match(/(?:effective|in force|appli(?:es|cable) from)\s+(\d{4}-\d{2}-\d{2})/i)?.[1];
  if(date&&date>asOf)return `not effective until ${date}`;
  if(!/^(maximum level|statutory limit|guidance impurity limit|maximum contaminant level|maximum permitted concentration \(Option 1\)|guidance release limit \(comparator\)|final guidance action level|recommended maximum level|guidance hazard-control level|regulatory quality standard|action level \(compliance policy guide\)|binding regulation \(adulteration rule\)|guidance action level|adopted maximum level effective \d{4}-\d{2}-\d{2})$/.test(s))return `unrecognized finalized status: ${s||'missing'}`;
  return null;
}
function basisFamily(b='') {
  const x=b.toLowerCase();
  if(/µg\/cm|ug\/cm|per week/.test(x))return 'release-area-time';
  if(/pde|daily dose|ug\/day|µg\/day/.test(x))return 'daily-dose';
  if(/after extraction|extractable element content|extractable.*textile/.test(x))return 'extraction';
  if(/migration|migratable|leachate|soluble|element release|specific release/.test(x))return 'migration';
  if(/accessible component|homogeneous|surface coating|coating film|total.*content|percent by weight/.test(x))return 'material-content';
  if(/as.sold|as.consumed|as placed|placed on market|wet weight|dry weight|powder|drinking water/.test(x))return 'product-content';
  return null; // No inferred food conversion. Explicit compiled conversion is required below.
}
export function anchorCandidate({id,declared,cell,record,analyte,register,asOf,role}) {
  const row=register.get(id); const problems=[];
  if(!row)return {id,role,problems:[`register anchor missing: ${id}`]};
  const bad=statusProblem(row,asOf);if(bad)problems.push(bad);
  if(metal(row.metal_species)!==analyte)problems.push(`species mismatch: ${row.metal_species} cannot anchor ${analyte}`);
  // Some register rows label organotin 'Sn'; never let that become a total-tin anchor.
  if(analyte==='Sn'&&/organotin|dibutyltin|dioctyltin|tributyltin|triphenyltin/i.test(row.basis+' '+row.product_scope))problems.push('organotin restriction cannot anchor total Sn');
  const raw=row.value_ug_kg?.trim()===''?NaN:Number(row.value_ug_kg);
  if(!numeric(raw))problems.push('non-numeric or negative register value');
  if(!row.regulation_page&&!row.url)problems.push('register citation missing');
  const guard=record.basis_guard;
  if(guard&&!new RegExp(guard,'i').test(`${row.basis||''} ${row.basis_class||''}`))problems.push('anchor fails record basis_guard');
  const target=cell.basis||record.native_basis||'';
  const a=basisFamily(row.basis), b=basisFamily((record.native_basis||target).split(/\b(?:not|never)\b/i)[0]);
  if(a&&b&&a!==b)problems.push(`incompatible basis families: ${a} → ${b}`);
  let value=raw, conversion='same register basis; compiled applicability retained';
  if(declared?.converted && numeric(declared?.value) && !equal(declared.value, raw)) {
    // Cat-1 alone discloses this legislated ratio. No generic powder/RTF regex or guessed factor.
    const sourceBasis=`${row.basis} ${row.basis_class}`;
    const targetBasis=record.native_basis||'';
    const formula=/^infant-formula-/.test(record.slug||'');
    if(formula && /powder/.test(record.slug||'') && /as_sold|powder|placed/.test(targetBasis) && /consum|prepared|liquid|ready|portion ordinarily/.test(sourceBasis)) {value=raw*8;conversion='×8 formula reconstitution; explicit compiled converted flag';}
    else if(formula && /consum|prepared|liquid|ready/.test(targetBasis) && /powder/.test(row.product_scope||'') && /as_sold|powder|placed/.test(sourceBasis)) {value=raw/8;conversion='÷8 explicitly powder-form formula source; compiled conversion';}
    else problems.push('unsupported basis conversion; no factor invented');
  }
  // Candidate snapshots can be stale or rounded. The table uses the exact source value and lists deltas.
  if(numeric(declared?.value)&&!equal(declared.value,value))problems.push(`candidate/register value drift: compiled ${declared.value}, register on native basis ${value}`);
  return {id,role,value,register_value:raw,unit:'register-normalized units (see basis)',basis:row.basis,native_basis:target,conversion,jurisdiction:row.jurisdiction,authority:row.authority,status:row.status,product_scope:row.product_scope,citation:row.url||`https://heavymetalindex.com/${row.regulation_page}`,regulation_page:row.regulation_page,register_row_sha256:hash(JSON.stringify(row)),problems};
}

function finishCell(output) {
  if(output.problems.length) {
    output.diagnostic_candidate_limit=output.limit;output.diagnostic_candidate_floor=output.government_floor;
    output.limit=null;output.government_floor=null;output.limit_of_record=`BLOCKED: ${output.problems.join('; ')}`;
  }
  return output;
}

export function resolveCell({cell, cells, record, analyte, register, asOf, seen=new Set()}) {
  const c=cell||{}; const kind=kindOf(c); const problems=[];
  if(!kind)problems.push(cell?'unsupported or retired cell kind':'cell absent from compiled record');
  if(/literature.baseline|feasibility.driven|percentile|occurrence/i.test([c.provenance,c.provenance_tag,c.basis_kind].filter(Boolean).join(' ')))problems.push('retired occurrence basis on live cell');
  const rationale=c.rationale||c.substantiation||c.label||c.control||c.reference_method||'';
  const output={kind:kind||'UNRESOLVED',published_value:numeric(c.value)?c.value:null,unit:c.unit||'register-normalized units (see basis)',basis:c.basis||record.native_basis||'UNSPECIFIED',rationale,government_floor:null,read_across:null,limit:null,limit_of_record:'BLOCKED: no verified limit-of-record',provenance:[],problems};
  if(!cell)return finishCell(output);
  if(!c.basis&&!record.native_basis&&kind!=='subsumed')problems.push('native basis missing');
  const direct=new Map();
  for(const entry of [...Object.values(c.per_country||{}),...(kind==='read-across'?[]:[...(c.candidates||[]),...(c.concurring||[])])])if(entry?.id)direct.set(entry.id,entry);
  if(kind!=='read-across'&&c.binding_id&&!direct.has(c.binding_id))direct.set(c.binding_id,{value:c.value_exact??c.value,converted:/[×÷].*8|8.*[×÷]/.test(c.basis_note||'')});
  if(c.sovereign_floor?.id&&!direct.has(c.sovereign_floor.id))direct.set(c.sovereign_floor.id,{value:c.sovereign_floor.value});
  if(c.binding_id && direct.has(c.binding_id) && /[×÷].*8|8.*[×÷]/.test(c.basis_note||''))direct.set(c.binding_id,{...direct.get(c.binding_id),converted:true});
  const candidates=[...direct].map(([id,declared])=>anchorCandidate({id,declared,cell:c,record,analyte,register,asOf,role:'direct'}));
  const readIds=new Set([c.source_id,...(c.components||[]).map(x=>x.source_id),...(kind==='read-across'?[c.binding_id,...(c.candidates||[]).map(x=>x.id),...(c.concurring||[]).map(x=>x.id)]:[])].filter(Boolean));
  const reads=[...readIds].map(id=>anchorCandidate({id,declared:{value:(c.components||[]).find(x=>x.source_id===id)?.value??(c.candidates||[]).find(x=>x.id===id)?.value??(c.concurring||[]).find(x=>x.id===id)?.value??c.value_exact??c.value},cell:c,record,analyte,register,asOf,role:'read-across'}));
  output.provenance=[...candidates,...reads];
  for(const p of output.provenance)problems.push(...p.problems.map(x=>`${p.id}: ${x}`));
  const valid=candidates.filter(x=>!x.problems.length).sort((a,b)=>a.value-b.value||a.id.localeCompare(b.id));
  const ra=reads.filter(x=>!x.problems.length).sort((a,b)=>a.value-b.value||a.id.localeCompare(b.id));
  if(valid.length)output.government_floor=valid[0];
  if(ra.length)output.read_across=ra[0];
  if(c.forms?.length) {
    output.forms=c.forms.map(form=>({form:form.form,...resolveCell({cell:{...form,type:form.type||'gov',basis:c.basis},cells,record,analyte,register,asOf,seen})}));
    problems.push(...output.forms.flatMap(f=>f.problems.map(p=>`${f.form}: ${p}`)));
    output.limit_of_record=output.forms.map(f=>`${f.form}: ${f.limit_of_record}`).join('; ');
    return finishCell(output); // Different legally split forms never collapse into an envelope or one minimum.
  }
  if(kind==='subsumed') {
    const parent=c.subsumed_by||c.bounded_by;
    if(!PARENT[analyte]||parent!==PARENT[analyte])problems.push('invalid species/parent relationship');
    else if(seen.has(parent))problems.push('circular subsumption');
    else {
      const p=resolveCell({cell:cells[parent],cells,record,analyte:parent,register,asOf,seen:new Set([...seen,analyte])});
      output.provenance.push(...p.provenance.map(x=>({...x,role:`parent ${parent}`})));
      if(p.problems.length||!numeric(p.limit))problems.push(`parent ${parent} has no verified numeric ceiling`);
      else {output.limit=p.limit;output.limit_of_record=`${analyte} ≤ ${parent}: ${p.limit} ${p.unit}`;output.parent=parent;output.basis=p.basis;output.unit=p.unit;}
    }
  } else if(kind==='precautionary') {
    const floor=output.government_floor;
    if(!numeric(c.value)||!floor||!(c.value<floor.value)||!rationale)problems.push('precautionary value needs documented rationale and a higher verified government floor');
    else {output.limit=c.value;output.limit_of_record=`${c.value} ${output.unit}; precautionary, government floor ${floor.value}`;}
  } else if(kind==='baseline-screen') {
    if(!numeric(c.value)||!c.reference_method||!c.loq_source_id)problems.push('baseline requires numeric LOQ, reference_method and loq_source_id');
    else {output.limit=c.value;output.limit_of_record=`< ${c.value} ${output.unit} by ${c.reference_method}`;output.method_citation=c.loq_source_id;problems.push('method LOQ citation requires source-value verification before admission');}
  } else if(kind==='control'||kind==='not-material') {
    // These are explicit dispositions, NEVER numeric completeness or mint-ready evidence.
    output.limit_of_record=`${kind.toUpperCase()}: ${rationale||'rationale missing'}`;
    if(!rationale)problems.push('disposition rationale missing');
    if(kind==='control'&&!c.reference_method)problems.push('control reference method missing');
    output.mint_blocker='No numeric or bounded limit-of-record; named method LOQ or defensible read-across required';
    if(output.government_floor)problems.push('non-numeric disposition has an applicable finalized government candidate');
  } else if(kind) {
    const chosen=output.government_floor||output.read_across;
    if(chosen) {
      output.limit=chosen.value;output.kind=output.government_floor?'regulatory-alignment':'read-across';
      output.limit_of_record=`${chosen.value} ${output.unit}`;
      if(kind==='read-across'&&output.government_floor)problems.push('read-across claimed despite direct government candidate; gov-first lookup differs from published kind');
      if(numeric(c.value)&&!equal(c.value,chosen.value))output.proposed_delta={from:c.value,to:chosen.value,note:'lookup result only; compiled standard not changed'};
    } else problems.push('no verified finalized government or disclosed read-across anchor');
  }
  return finishCell(output);
}
function recordsAt(root,subdir,label) {
  const base=path.join(root,subdir);const out=[];
  for(const dir of fs.readdirSync(base).filter(d=>d.endsWith('-compiled')).sort())for(const f of fs.readdirSync(path.join(base,dir)).filter(f=>f.endsWith('.json')).sort()) {
    const relative=path.join(subdir,dir,f),bytes=fs.readFileSync(path.join(root,relative),'utf8'),record=JSON.parse(bytes);
    if(!record.cells&&!record.variants)continue;
    out.push({slug:record.slug||f.slice(0,-5),record:{...record,slug:record.slug||f.slice(0,-5)},source:{repository:label,path:relative,sha256:hash(bytes)}});
  }
  return out;
}
export function buildTable({indexRoot,certRoot,asOf}) {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(asOf)||!Number.isFinite(Date.parse(asOf)))throw new Error('Valid --as-of=YYYY-MM-DD required');
  const registerBytes=fs.readFileSync(path.join(indexRoot,'data/evidence/regulatory_limits.csv'),'utf8');
  const regRows=parseCSV(registerBytes),register=new Map();
  for(const r of regRows){if(register.has(r.regulatory_limit_id))throw new Error(`Duplicate regulatory id: ${r.regulatory_limit_id}`);register.set(r.regulatory_limit_id,r);}
  const upstream=recordsAt(indexRoot,'data/workbench/standards','hmi');
  const current=certRoot?recordsAt(certRoot,'data/standards','cert'):[];
  const grouped=new Map();for(const r of [...upstream,...current]){const list=grouped.get(r.slug)||[];list.push(r);grouped.set(r.slug,list);}
  const rows=[],divergences=[];
  for(const [slug,sources] of [...grouped].sort(([a],[b])=>a.localeCompare(b))) {
    const live=sources.filter(x=>x.source.repository==='cert');
    if(live.length>1)throw new Error(`Duplicate current cert slug: ${slug}`);
    if(!live.length&&new Set(sources.map(s=>s.source.sha256)).size>1)throw new Error(`Ambiguous HMI-only records for ${slug}; explicit current-cert authority required`);
    const selected=live[0]||sources[0];
    if(sources.some(s=>s.source.sha256!==selected.source.sha256))divergences.push({slug,selected:selected.source,other_sources:sources.filter(s=>s!==selected).map(s=>s.source)});
    const {record,source}=selected;
    for(const [variant,cells] of Object.entries(record.variants||{'_':record.cells}).sort(([a],[b])=>a.localeCompare(b)))for(const analyte of [...new Set([...PANEL,...Object.keys(cells)])]) {
      const result=resolveCell({cell:cells[analyte],cells,record,analyte,register,asOf});
      if(record.provisional_scaffold)result.problems.push('provisional scaffold');
      if(result.problems.length) {
        result.diagnostic_candidate_limit??=result.limit;
        result.diagnostic_candidate_floor??=result.government_floor;
        result.limit=null;result.government_floor=null;
        result.limit_of_record=`BLOCKED: ${result.problems.join('; ')}`;
      }
      const cellPointer=record.variants?`/variants/${variant}/${analyte}`:`/cells/${analyte}`;
      rows.push({key:`${slug}|${variant}|${analyte}`,subcategory:slug,category:record.category??null,variant,analyte,source:{...source,pointer:cellPointer},publication_scope:live.length?'current-cert-compiled':'hmi-only-unpublished',...result,status:result.problems.length?'BLOCKED':result.mint_blocker?'DISPOSITION_ONLY':'ANCHOR_VERIFIED'});
    }
  }
  const count=fn=>rows.filter(fn).length;
  return {schema_version:1,order:'S-DOI-1',as_of:asOf,method:'Lowest finalized same-basis government candidate named in compiled applicability; otherwise disclosed anchored read-across. No occurrence input. Source standards remain unchanged.',coverage_note:'Current cert compiled records take precedence by slug; HMI-only records remain unpublished. ANCHOR_VERIFIED means current named anchors pass these mechanical checks, not CORRECTED or mint-ready. Named candidate coverage is not proof that no government anywhere regulates a cell. Unresolved entries are BLOCKED, never disguised as an approved kind or a numeric limit.',register:{path:'data/evidence/regulatory_limits.csv',sha256:hash(registerBytes),rows:register.size},summary:{subcategories:grouped.size,cells:rows.length,anchor_verified:count(r=>r.status==='ANCHOR_VERIFIED'),disposition_only:count(r=>r.status==='DISPOSITION_ONLY'),blocked:count(r=>r.status==='BLOCKED'),unresolved_kind:count(r=>r.kind==='UNRESOLVED'),lookup_deltas:count(r=>r.proposed_delta),source_divergences:divergences.length},rows,source_divergences:divergences};
}
export function writeTable(table,out) {
  fs.mkdirSync(out,{recursive:true});
  fs.writeFileSync(path.join(out,'regulatory-floor-table.json'),JSON.stringify(table,null,2)+'\n');
  const cols=['subcategory','variant','analyte','kind','status','limit_of_record','published_value','lookup_value','unit','basis','provenance','source','problems'];
  const quote=x=>'"'+String(x??'').replaceAll('"','""')+'"';
  const csv=[cols,...table.rows.map(r=>[r.subcategory,r.variant,r.analyte,r.kind,r.status,r.limit_of_record,r.published_value??'non-numeric',r.limit??'non-numeric',r.unit,r.basis,r.provenance.map(p=>`${p.role}: ${p.id}; ${p.citation||'MISSING CITATION'}`).join(' | ')||r.method_citation||`${r.source.path}#${r.source.pointer}`,`${r.source.repository}:${r.source.path}#${r.source.pointer}`,r.problems.join(' | ')||r.mint_blocker||'none'])].map(r=>r.map(quote).join(',')).join('\n')+'\n';
  fs.writeFileSync(path.join(out,'regulatory-floor-table.csv'),csv);
  const lines=['# Regulatory Floor Table — S-DOI-1','',`As of ${table.as_of}. Staff-only; no DOI minted and no compiled ceiling changed.`,'',table.coverage_note,'',...Object.entries(table.summary).map(([k,v])=>`- ${k}: ${v}`),'','## Lookup/source deltas (not applied)','',...table.rows.filter(r=>r.proposed_delta).map(r=>`- ${r.key}: ${r.proposed_delta.from} → ${r.proposed_delta.to} ${r.unit}; ${r.status}`),'','## Blocked cells','',...table.rows.filter(r=>r.status==='BLOCKED').map(r=>`- ${r.key}: ${r.problems.join('; ')}`),'','## Non-numeric dispositions requiring a limit before minting','',...table.rows.filter(r=>r.mint_blocker).map(r=>`- ${r.key}: ${r.kind}; ${r.mint_blocker}`)];
  fs.writeFileSync(path.join(out,'regulatory-floor-status.md'),lines.join('\n')+'\n');
}
export function main(argv=process.argv.slice(2)) {
  const args=new Map(argv.filter(a=>a.startsWith('--')).map(a=>{const i=a.indexOf('=');return i<0?[a.slice(2),true]:[a.slice(2,i),a.slice(i+1)];}));
  const indexRoot=path.resolve(args.get('index-root')||process.cwd());
  const certRoot=args.get('index-only')?null:path.resolve(args.get('cert-root')||path.join(indexRoot,'../heavymetalcertified'));
  const table=buildTable({indexRoot,certRoot,asOf:args.get('as-of')||new Date().toISOString().slice(0,10)});
  const product=args.get('product');
  if(product){const names=String(product).split(',');table.rows=table.rows.filter(r=>names.includes(r.subcategory));if(names.some(n=>!table.rows.some(r=>r.subcategory===n)))throw new Error('Requested product has no compiled record');}
  if(product) {table.global_summary=table.summary;table.summary={subcategories:new Set(table.rows.map(r=>r.subcategory)).size,cells:table.rows.length,anchor_verified:table.rows.filter(r=>r.status==='ANCHOR_VERIFIED').length,disposition_only:table.rows.filter(r=>r.status==='DISPOSITION_ONLY').length,blocked:table.rows.filter(r=>r.status==='BLOCKED').length};}
  if(args.has('print'))console.log(JSON.stringify(table,null,2));
  else {writeTable(table,path.resolve(args.get('out-dir')||path.join(indexRoot,'data/workbench/standards/regulatory-floor')));console.log(JSON.stringify(table.summary));}
  if(args.has('strict')&&table.rows.some(r=>r.status!=='ANCHOR_VERIFIED'))process.exitCode=1;
  return table;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))main();
