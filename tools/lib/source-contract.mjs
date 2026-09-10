// Provenance and evidence fitness are independent of the publisher's grade.
export function sourceContract(data) {
 const text=x=>typeof x==='string'&&x.trim().length>0
 const strings=x=>Array.isArray(x)&&x.length>0&&x.every(text)
 const gaps=['cite_key','source_type','evidence_tier','license'].filter(k=>!text(data[k]))
 const fitness=data.evidence_fitness
 if(!fitness||typeof fitness!=='object'||Array.isArray(fitness)||!strings(fitness.supports)||!strings(fitness.does_not_support))gaps.push('evidence_fitness')
 if(!text(data.access_url)&&!/^10\.\d{4,9}\//.test(String(data.doi||'')))gaps.push('access_url')
 const hash=data.raw_sha256||data.raw_file_sha256||data.sha256
 if(!/^[a-f\d]{64}$/i.test(String(hash||'')))gaps.push('raw_sha256')
 if(!text(data.raw_path)&&!(Array.isArray(data.raw_files)&&data.raw_files.length>0&&data.raw_files.every(f=>text(f?.path))))gaps.push('raw_path')
 if(data.routing_input_gaps!=null&&!Array.isArray(data.routing_input_gaps))gaps.push('routing_input_gaps:invalid')
 else for(const k of data.routing_input_gaps||[])gaps.push('routing_input:'+k)
 if(data.status==='tier1-stub'||data.evidence_tier==='pending')gaps.push('deep_read')
 return {metadata_complete:gaps.length===0,ingest_complete:data.ingest_status==='complete'&&gaps.length===0,gaps:[...new Set(gaps)],completion_note:'Metadata completeness alone does not prove extraction, routing, or primary-source coverage. Completed ingest requires its reconciliation and route audits.'}
}
