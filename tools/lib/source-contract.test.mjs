import test from 'node:test'
import assert from 'node:assert/strict'
import {sourceContract} from './source-contract.mjs'
const complete={cite_key:'example',source_type:'gov-data',evidence_tier:'A',license:'us-government-work',evidence_fitness:{supports:['source occurrence'],does_not_support:['unqualified population inference']},access_url:'https://www.fda.gov/example',raw_path:'raw/example.txt',raw_sha256:'a'.repeat(64)}
test('source quality grade cannot stand in for provenance or completed ingest',()=>{
 assert.ok(sourceContract({evidence_tier:'A'}).gaps.includes('raw_sha256'))
 assert.equal(sourceContract(complete).metadata_complete,true)
 assert.equal(sourceContract(complete).ingest_complete,false)
 assert.equal(sourceContract({...complete,ingest_status:'complete'}).ingest_complete,true)
})
test('explicit routing gaps prevent false complete claims',()=>{
 const result=sourceContract({...complete,ingest_status:'complete',routing_input_gaps:['products']})
 assert.equal(result.ingest_complete,false)
 assert.deepEqual(result.gaps,['routing_input:products'])
})
test('wrongly typed declarations cannot forge completion',()=>{
 const result=sourceContract({...complete,ingest_status:'complete',license:true,raw_path:true,evidence_fitness:{supports:true,does_not_support:true}})
 assert.equal(result.ingest_complete,false)
 for(const field of ['license','raw_path','evidence_fitness'])assert.ok(result.gaps.includes(field))
 assert.equal(sourceContract({...complete,evidence_fitness:{supports:[],does_not_support:['limits']}}).metadata_complete,false)
})
