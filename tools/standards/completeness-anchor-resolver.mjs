#!/usr/bin/env node
// completeness-anchor-resolver.mjs — proposes, for every EMPTY analyte cell in a compiled category,
// the strictest applicable register anchor (by regulatory_limit_id) or a subsumed disposition, so the
// 2026-08-25 completeness backlog can be drained WITHOUT fabricating a single number: every proposal is
// a real register row the deterministic compiler will re-validate. It PROPOSES; a human/adversarial pass
// verifies matrix-applicability before it is written into a config. Never writes anything itself.
//
// Usage: node tools/standards/completeness-anchor-resolver.mjs --compiled=<dir> [--basis=as_sold|as_consumed]
//        node tools/standards/completeness-anchor-resolver.mjs --compiled=data/workbench/standards/cat3-compiled
import fs from "node:fs"; import path from "node:path";
const REPO=process.cwd();
const args=new Map(process.argv.slice(2).map(a=>{const[k,v]=a.replace(/^--/,"").split("=");return[k,v??true]}));
const COMPILED=args.get("compiled"); if(!COMPILED){console.error("--compiled=<dir> required");process.exit(1)}

function parseCSV(t){const r=[];let f=[],c="",q=false;for(let i=0;i<t.length;i++){const ch=t[i];if(q){if(ch=='"'){if(t[i+1]=='"'){c+='"';i++}else q=false}else c+=ch}else{if(ch=='"'){q=true}else if(ch==','){f.push(c);c=""}else if(ch=='\n'){f.push(c);r.push(f);f=[];c=""}else if(ch=='\r'){}else c+=ch}}if(c.length||f.length){f.push(c);r.push(f)}return r}
const rows=parseCSV(fs.readFileSync(path.join(REPO,"data/evidence/regulatory_limits.csv"),"utf8"));
const H=rows[0],I=n=>H.indexOf(n);
const iId=I("regulatory_limit_id"),iJur=I("jurisdiction"),iMet=I("metal_species"),iVal=I("value_ug_kg"),iBC=I("basis_class"),iBasis=I("basis"),iScope=I("product_scope"),iStat=I("status");
const REG=rows.slice(1).map(r=>({id:r[iId],jur:r[iJur],met:r[iMet],val:+r[iVal],bc:r[iBC],basis:r[iBasis],scope:(r[iScope]||"").toLowerCase(),stat:r[iStat]})).filter(r=>r.id&&!isNaN(r.val));
const GATED=/draft|withdrawn|superseded|quarantine|proposed|repealed/i;
const PARENT={iAs:"tAs",MeHg:"tHg","Cr-VI":"Cr"};

// general-food catch-all scope patterns (apply to any food, as-sold)
const CATCHALL=/any food|other food|food other than|foods in general|foods.*general|not specified|not named|all food|other than those listed/;

// per-metal candidate anchor finder: strictest applicable register row for (metal, matrix keywords, basis)
function candidates(metal, matrixKeywords, basis){
  const kw=matrixKeywords.map(k=>k.toLowerCase());
  const basisOk=r=>{
    if(basis==="as_consumed") return r.bc==="as_consumed"||/water intended|drinking water|bottled water|beverage|ready.to.drink|as consumed/.test(r.basis.toLowerCase());
    return r.bc==="as_sold"||/as[ _]sold|placed on market|edible part|dry matter|dry weight/.test(r.basis.toLowerCase());
  };
  const pool=REG.filter(r=>r.met===metal && !GATED.test(r.stat) && basisOk(r));
  // 1. direct matrix match
  const direct=pool.filter(r=>kw.some(k=>r.scope.includes(k))).sort((a,b)=>a.val-b.val);
  // 2. general-food catch-all
  const catch_=pool.filter(r=>CATCHALL.test(r.scope)).sort((a,b)=>a.val-b.val);
  return {direct:direct.slice(0,4), catchall:catch_.slice(0,2)};
}

const files=fs.readdirSync(path.join(REPO,COMPILED)).filter(f=>f.endsWith(".json")&&!f.startsWith("deriv")&&!f.startsWith("_"));
for(const f of files){
  const s=JSON.parse(fs.readFileSync(path.join(REPO,COMPILED,f),"utf8"));
  const cells=s.variants?(s.variants.default||Object.values(s.variants)[0]):s.cells;
  if(!cells)continue;
  const empties=Object.entries(cells).filter(([k,v])=>(v.value==null||v.value===undefined)&&v.type!=="subsumed"&&(v.provenance!=="subsumed"));
  if(!empties.length)continue;
  const basis=(String(s.native_basis||"").toLowerCase().includes("consum"))?"as_consumed":"as_sold";
  const name=(s.name||f.replace(".json","")).toLowerCase();
  // derive matrix keywords from slug+name
  const mk=[...new Set((f.replace(".json","")+" "+name).split(/[^a-z]+/).filter(w=>w.length>2))];
  console.log(`\n### ${f.replace(".json","")}  [${basis}]  empties: ${empties.map(e=>e[0]).join(", ")}`);
  for(const[a,v]of empties){
    if(PARENT[a]){
      const p=cells[PARENT[a]];
      const pv=(p&&(p.value!=null))||(p&&p.type==="subsumed");
      console.log(`  ${a.padEnd(6)} -> SUBSUME by ${PARENT[a]}${pv?"":"  (WARN: parent "+PARENT[a]+" is also empty — resolve parent first)"}`);
      continue;
    }
    const {direct,catchall}=candidates(a,mk,basis);
    const fmt=r=>`${r.val}[${r.jur}] ${r.id} (${r.scope.slice(0,32)})`;
    if(direct.length) console.log(`  ${a.padEnd(6)} -> DIRECT   ${fmt(direct[0])}${direct.length>1?"   | others: "+direct.slice(1).map(r=>r.val+"["+r.jur+"]").join(", "):""}`);
    else if(catchall.length) console.log(`  ${a.padEnd(6)} -> CATCHALL ${fmt(catchall[0])}`);
    else console.log(`  ${a.padEnd(6)} -> NO ANCHOR (needs analog read-across or review)`);
  }
}
