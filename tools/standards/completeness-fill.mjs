#!/usr/bin/env node
// completeness-fill.mjs — post-compile stage that drains the 2026-08-25 empty-cell backlog uniformly
// across every compiled-standard architecture, WITHOUT fabricating a number.
//
// Two fills, both safe:
//   1. SPECIES SUBSUMPTION (mechanical, no judgment): an empty iAs / MeHg / Cr-VI whose parent total
//      (tAs / tHg / Cr) carries a value or is itself subsumed becomes type/provenance "subsumed",
//      bounded_by the parent. An enforceable ceiling via reflex speciation (Certification-Readiness
//      Ruling): it is a limit-of-record, not an empty cell, and needs no register lookup.
//   2. TOTAL ANCHOR (verified): an empty total whose (slug, metal) appears in the anchor manifest is
//      filled from the named register id — re-validated against the register here, so a stale or wrong
//      id fails loudly rather than shipping a bad number. The manifest is human/adversarially verified
//      per matrix before a category is shipped; nothing here invents an anchor.
//
// A cell with no rule stays empty (still surfaced by the readiness lint). This tool never guesses.
//
// Usage: node tools/standards/completeness-fill.mjs --compiled=<dir> [--manifest=<file>] [--write] [--report]
import fs from "node:fs"; import path from "node:path";
const REPO=process.cwd();
const args=new Map(process.argv.slice(2).map(a=>{const[k,v]=a.replace(/^--/,"").split("=");return[k,v??true]}));
const COMPILED=args.get("compiled"); if(!COMPILED){console.error("--compiled=<dir> required");process.exit(1)}
const WRITE=args.has("write");
// register + manifest may live in a different repo (index) than the compiled dirs (cert); allow absolute overrides.
const REGISTER=args.get("register")||"data/evidence/regulatory_limits.csv";
const MANIFEST=args.get("manifest")||"data/workbench/standards/completeness-anchors.json";

function parseCSV(t){const r=[];let f=[],c="",q=false;for(let i=0;i<t.length;i++){const ch=t[i];if(q){if(ch=='"'){if(t[i+1]=='"'){c+='"';i++}else q=false}else c+=ch}else{if(ch=='"'){q=true}else if(ch==','){f.push(c);c=""}else if(ch=='\n'){f.push(c);r.push(f);f=[];c=""}else if(ch=='\r'){}else c+=ch}}if(c.length||f.length){f.push(c);r.push(f)}return r}
const rows=parseCSV(fs.readFileSync(path.isAbsolute(REGISTER)?REGISTER:path.join(REPO,REGISTER),"utf8"));
const H=rows[0],I=n=>H.indexOf(n);
const byId=new Map(rows.slice(1).map(r=>[r[I("regulatory_limit_id")],{val:+r[I("value_ug_kg")],jur:r[I("jurisdiction")],met:r[I("metal_species")],bc:r[I("basis_class")],basis:r[I("basis")],scope:r[I("product_scope")],stat:r[I("status")]}]));
const GATED=/draft|withdrawn|superseded|quarantine|proposed|repealed/i;
const PARENT={iAs:"tAs",MeHg:"tHg","Cr-VI":"Cr"};
const roundDisplay=x=>{if(x==null)return null;if(x>=100000)return Math.round(x/1000)*1000;if(x>=1000)return Math.round(x/100)*100;if(x>=100)return Math.round(x/10)*10;if(x>=10)return Math.round(x);if(x>=1)return Math.round(x*10)/10;return Math.round(x*100)/100};

const manifestPath=path.isAbsolute(MANIFEST)?MANIFEST:path.join(REPO,MANIFEST);
const manifest=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,"utf8")):{};

const files=fs.readdirSync(path.join(REPO,COMPILED)).filter(f=>f.endsWith(".json")&&!f.startsWith("deriv")&&!f.startsWith("_"));
let filledSpecies=0, filledTotal=0, stillEmpty=0, errors=[];
const report=[];
for(const f of files){
  const fp=path.join(REPO,COMPILED,f);
  const s=JSON.parse(fs.readFileSync(fp,"utf8"));
  const cells=s.variants?(s.variants.default||s.variants[Object.keys(s.variants)[0]]):s.cells;
  if(!cells)continue;
  const slug=s.slug||f.replace(/\.json$/,"");
  const isEmpty=v=>(v.value==null||v.value===undefined)&&v.type!=="subsumed"&&v.provenance!=="subsumed";
  let changed=false;
  const rowRep=[];
  // pass A: totals from manifest (must run before species so parent gets a value)
  for(const[a,v]of Object.entries(cells)){
    if(!isEmpty(v)||PARENT[a])continue;
    const mid=(manifest[slug]&&manifest[slug][a])||(manifest["*"+a] /*global metal default, rarely*/);
    if(!mid)continue;
    const r=byId.get(mid);
    if(!r){errors.push(`${slug}/${a}: manifest id ${mid} NOT in register`);continue}
    if(GATED.test(r.stat)){errors.push(`${slug}/${a}: manifest id ${mid} gated (${r.stat})`);continue}
    if(r.met!==a){errors.push(`${slug}/${a}: manifest id ${mid} is metal ${r.met}, not ${a}`);continue}
    cells[a]={type:"read_across",value:roundDisplay(r.val),value_exact:r.val,provenance:"read-across",source_id:mid,source_jurisdiction:r.jur,basis:r.basis,source_scope:r.scope,label:`${a} ${roundDisplay(r.val)} ug/kg: disclosed read-across from ${r.jur} ${mid} (${(r.scope||"").slice(0,48)}). Filled by the completeness sweep; nearest applicable sovereign for this matrix and basis.`,substantiation:`Disclosed read-across, register-verified (${mid}). Nearest applicable sovereign ${a} ceiling for this product form. Not occurrence-derived.`,filled_by:"completeness-sweep"};
    changed=true;filledTotal++;rowRep.push(`${a}=${roundDisplay(r.val)}[${r.jur}]`);
  }
  // pass B: species subsumption
  for(const[a,v]of Object.entries(cells)){
    if(!isEmpty(v)||!PARENT[a])continue;
    const p=cells[PARENT[a]];
    const parentHas=p&&((p.value!=null)||p.type==="subsumed"||p.provenance==="subsumed");
    if(!parentHas){stillEmpty++;rowRep.push(`${a}=STILL-EMPTY(parent ${PARENT[a]} empty)`);continue}
    cells[a]={type:"subsumed",value:null,provenance:"subsumed",subsumed_by:PARENT[a],bounded_by:PARENT[a],basis_class:"speciation-bounded",rationale:`${a} carries no product-specific sovereign cell; it is a component of and bounded by its parent total ${PARENT[a]} (${a} <= ${PARENT[a]}), an enforceable ceiling via reflex speciation rather than an empty cell.`,reference_method:`${a} speciation reflexed when the parent total reaches min(species limit, 50 percent of the parent-total limit); the species never substitutes for the parent-total report.`,filled_by:"completeness-sweep"};
    changed=true;filledSpecies++;rowRep.push(`${a}<=${PARENT[a]}`);
  }
  // remaining empties
  for(const[a,v]of Object.entries(cells)){ if(isEmpty(v)){stillEmpty++;if(!rowRep.some(x=>x.startsWith(a)))rowRep.push(`${a}=STILL-EMPTY`);} }
  if(changed){
    if(WRITE)fs.writeFileSync(fp,JSON.stringify(s,null,2)+"\n");
    report.push(`  ${slug}: ${rowRep.join(", ")}`);
  }
}
console.log(`completeness-fill [${COMPILED}]${WRITE?" (WROTE)":" (dry-run)"}: species+${filledSpecies}, totals+${filledTotal}, still-empty ${stillEmpty}`);
if(report.length&&args.has("report"))console.log(report.join("\n"));
if(errors.length){console.error("\nERRORS (nothing written for these cells):\n  "+errors.join("\n  "));process.exitCode=1}
