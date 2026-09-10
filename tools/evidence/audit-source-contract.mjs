#!/usr/bin/env node
import fs from 'node:fs'
import matter from 'gray-matter'
import { sourceContract } from '../lib/source-contract.mjs'
const rows=[];let failures=0
for(const file of fs.readdirSync('wiki/sources').filter(x=>x.endsWith('.md')&&!x.startsWith('_')&&x!=='index.md')) {
 const data=matter.read('wiki/sources/'+file).data
 if(data.type!=='source')continue
 const result=sourceContract(data)
 if(!result.metadata_complete) rows.push({page:'wiki/sources/'+file,cite_key:data.cite_key,...result})
 if(data.ingest_status==='complete'&&!result.metadata_complete){console.error(file+': falsely marked complete: '+result.gaps.join(', '));failures++}
}
fs.writeFileSync('data/evidence/source_contract_gaps.json',JSON.stringify({schema_version:1,description:'Explicit recovery queue. Source grade is not ingest completion; missing facts must be recovered or dispositioned, never fabricated.',records:rows},null,2)+'\n')
console.log(`Source contract: ${rows.length} records need metadata/provenance recovery; ${failures} false complete declarations.`)
if(failures)process.exitCode=1
