#!/usr/bin/env node
import fs from 'node:fs'
import crypto from 'node:crypto'
import matter from 'gray-matter'
const fields=['products','ingredients','matrices','metals','jurisdictions']
const edits=[]
for(const file of fs.readdirSync('wiki/sources').filter(x=>x.endsWith('.md')&&!x.startsWith('_')&&x!=='index.md')) {
 const page='wiki/sources/'+file, raw=fs.readFileSync(page,'utf8'), {data,content}=matter(raw)
 const missing=fields.filter(k=>data[k]===undefined||data[k]===null)
 const isTomato=file==='shavali-gilani2025-canned-tomato-olive-pickle-iran.md'
 let next=raw
 for(const k of missing) {
  const line=new RegExp('^'+k+':[^\\n]*$','m')
  if(line.test(next)) next=next.replace(line,k+': []')
  else next=next.replace(/^---\r?\n/,'---\n'+k+': []\n')
 }
 if(missing.length) next=next.replace(/^---\r?\n/,'---\n'+`routing_input_gaps: ${JSON.stringify([...new Set([...(data.routing_input_gaps||[]),...missing])])}\nrouting_input_disposition: "Undeclared inputs retained as unresolved extraction gaps; empty arrays do not assert absence of applicable evidence."\n`)
 if(isTomato) next=next.replace('[[products/canned-tomato-paste]]','[[products/tomato-paste]]').replace(', "[[products/canned-olives]]"','').replace('[[products/pickled-vegetables]]','[[products/pickled-fermented-vegetables]]')
 if(next===raw) continue
 const sha=crypto.createHash('sha256').update(raw).digest('hex')
 const archive=`data/evidence/source_editorial_provenance/${file.slice(0,-3)}/${sha}.json`
 fs.mkdirSync(archive.substring(0,archive.lastIndexOf('/')),{recursive:true})
 if(!fs.existsSync(archive)) fs.writeFileSync(archive,JSON.stringify({page,original_markdown:raw,before_sha256:sha,reason:'Repair routing declarations without inventing missing source facts'},null,2)+'\n')
 fs.appendFileSync('data/evidence/wiki_edit_audit.jsonl',JSON.stringify({edit_id:'routing-declarations-'+sha,page,span_id:'routing-inputs',source_document:data.cite_key+' | preserved source record',retrieval_date:'2026-09-10',models_used:['gpt-6-astra'],model_agreement_state:'single_model',applied_at:new Date().toISOString(),commit_sha:'pending',archive})+'\n')
 fs.writeFileSync(page,next)
 edits.push({page,missing_fields:missing,disposition:missing.length?'pending-extraction':'canonical-equivalent-product-routes',archive})
}
fs.mkdirSync('data/evidence/audits/2026-09-10-fda-tds',{recursive:true})
if(edits.length) fs.writeFileSync('data/evidence/audits/2026-09-10-fda-tds/routing-declaration-repairs.json',JSON.stringify(edits,null,2)+'\n')
console.log(`Source routing declarations repaired: ${edits.length}; ${edits.filter(e=>e.missing_fields.length).length} retain explicit extraction gaps.`)
