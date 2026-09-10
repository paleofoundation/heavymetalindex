const fs = require('node:fs');
const {createRequire} = require('node:module');
const matter = createRequire(process.cwd() + '/package.json')('gray-matter');
const sourceFiles = fs.readdirSync('wiki/sources').filter(n => n.endsWith('.md') && !n.startsWith('_') && n !== 'index.md');
const records = sourceFiles.map(name => { const p=matter.read('wiki/sources/'+name); return {name, f:p.data, body:p.content.replace(/<!--[\s\S]*?-->/g,'')}; });
const sourceRecords = records.filter(r => r.f.type === 'source');
const tests = {
  public_eligible: r=>r.f.draft!==true&&r.f.draft!=='true',
  pending: r=>r.f.status==='tier1-stub'||r.f.evidence_tier==='pending',
  repo_path_body: r=>/(?:^|[\s`(])(?:data\/(?:evidence|workbench)|raw\/|tools\/|wiki\/)/m.test(r.body),
  process_terms_body: r=>/\b(?:Kimi|FRANK|ELON|Opus|Sonnet)\b|\bCodex\b(?! Alimentarius)/.test(r.body),
  kimi_body:r=>/\bKimi\b/.test(r.body),
  no_license:r=>!r.f.license,
  no_access_url:r=>!r.f.access_url,
  no_hash_named_key:r=>!Object.keys(r.f).some(k=>/sha256|hash/i.test(k)),
  no_audience:r=>!r.f.audience,
  no_fitness_marker:r=>!(/evidence[ -]fitness/i.test(r.body)||Object.keys(r.f).some(k=>/fitness/.test(k))),
  no_methods_heading:r=>!/^##\s+Methods\b/im.test(r.body),
  no_key_numbers_heading:r=>!/^##\s+Key numbers\b/im.test(r.body),
  no_implications_heading:r=>!/^##\s+Implications\b/im.test(r.body),
  no_exact_routes_heading:r=>!/^##\s+Wiki pages updated on ingest\b/im.test(r.body),
  verification_or_ingest_heading:r=>/^## (?:Verification notes|Ingest notes|Ingestion notes|Ingest audit)/m.test(r.body),
  certification_implications:r=>/(?:^|\n)(?:-\s*)?(?:\*\*)?Certification:/i.test(r.body),
};
const counts={files:sourceFiles.length,type_source:sourceRecords.length};
for(const [k,t] of Object.entries(tests))counts[k]=sourceRecords.filter(t).length;
console.log(JSON.stringify(counts,null,2));
console.log('missing_type',records.filter(r=>!r.f.type).map(r=>r.name));
console.log('NOTE: regex hits are candidate counts, not proof every matching page violates a rule. Missing fitness heading can be fulfilled semantically in Methods/Limitations. Missing hash key does not prove no external manifest hash exists.');
