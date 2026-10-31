// Cinnamon release integrity checks on the candidate and its isolated preview.
// The shared explorer now loads occurrence detail on demand from JSON payloads
// beside the page (data-src), so these checks read the payload files rather than an
// inline drawer fallback.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {buildIngredient,root,auditDir,candidatePath,recordPath} from './build.mjs';
import {validateRecord} from '../../validate.mjs';
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const json=f=>JSON.parse(read(f));
const sha=f=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex');
const preview=`${auditDir}/preview/ingredients/cinnamon.html`;
const report={date:'2026-10-22',checks:[]};
function check(name,f){f();report.checks.push({name,result:'pass'})}
const bad=/(?<![a-z0-9])p[\s_-]?95(?![a-z0-9])|\bhmt[\s_-]*(?:&\s*)?c\b|\bCodex AI\b|\bChatGPT\b|\bOpenAI\b|\bClaude\b/i;

check('Reproducible outputs',()=>buildIngredient({check:true}));
const record=json(recordPath),page=read(candidatePath),parity=json(`${auditDir}/row-parity.json`),html=read(preview);
check('All 36 coverage questions; record validates',()=>{assert.equal(record.answers.length,36);assert.deepEqual(validateRecord(record),[])});
check('FAQ bank dispositions and emitted count within 20',()=>{const bank=json(`${auditDir}/faq-bank-dispositions.json`);assert(bank.selected_count<=20);assert.equal(bank.bank.length,bank.selected_count+4)});
check('Ledger result IDs equal rendered row IDs',()=>{const ledger=json('data/evidence/contracts/cinnamon/evidence-ledger.json');assert.deepEqual(ledger.results.map(r=>r.id).sort(),parity.map(p=>p.row).sort())});
check('On-demand payloads exist, parse and cover every row',()=>{
 const srcs=[...html.matchAll(/data-src="\.\/([^"]+\.json)"/g)].map(m=>m[1]);
 assert(srcs.includes('cinnamon.hmi-occurrence-cinnamon.view.json'));
 const files=srcs.map(f=>`${auditDir}/preview/ingredients/${f}`);
 for(const f of files)assert(fs.existsSync(path.join(root,f)),`missing payload ${f}`);
 const view=json(files.find(f=>f.endsWith('.view.json')));assert.equal(view.rows.length,parity.length);
 const parts=files.filter(f=>!f.endsWith('.view.json')).map(json);
 assert.equal(parts.reduce((n,p)=>n+p.evidence.length,0),parity.length);
 for(const f of [preview,...files])assert(!bad.test(read(f)),`forbidden label in ${f}`);
});
check('Candidate clears forbidden internal labels and uses the shared presentation',()=>{assert(!bad.test(page));assert(html.includes('data-ingredient-presentation="rice-shared-v1"'))});
check('Original hero artwork retained',()=>{const hero=json('data/design/page-hero-images.json');const a=JSON.stringify(hero).includes('/static/heroes/spices-peppercorns-cinnamon-turmeric.webp');assert(a);assert(html.includes('/static/heroes/spices-peppercorns-cinnamon-turmeric.webp'))});
// wiki/ingredients/cinnamon.md is owned by central adoption (it may hold an earlier adopted candidate); this build only reads its frozen copy.
check('Frozen pre-rebuild baseline unchanged',()=>{const b=json(`${auditDir}/baseline.json`);assert.equal(sha(b.baseline),b.sha256);report.wiki_sha256=sha('wiki/ingredients/cinnamon.md')});
check('Outbreak rows measure applesauce and stay unrated',()=>{const ledger=json('data/evidence/contracts/cinnamon/evidence-ledger.json');const o=ledger.results.filter(r=>r.family_id.startsWith('napier'));assert(o.length>0);assert(o.every(r=>r.comparison.state==='unavailable'&&/applesauce/.test(r.scope.material)))});
fs.writeFileSync(path.join(root,auditDir,'integrity-checks.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
