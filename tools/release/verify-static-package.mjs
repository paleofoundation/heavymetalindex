// Package a rendered release only after all checks pass, without rerendering it.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {verifyRendered} from '../contracts/pilot/verify-rendered.mjs';
const receipt='.vercel/rice-static-manifest.json';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
function snapshot(dir='public',base=dir){return fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(entry=>{const file=path.join(dir,entry.name);return entry.isDirectory()?snapshot(file,base):[{file:path.relative(base,file),sha256:hash(fs.readFileSync(file))}]})}
const commit=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
if(process.argv.includes('--record')){
 const checks=[['tools/contracts/build-pilot.mjs','--check'],['tools/contracts/validate.mjs'],['tools/audit-html-titles.mjs'],['tools/audit-meta-descriptions.mjs'],['tools/audit-metal-expansion.mjs'],['tools/audit-dead-internal-hrefs.mjs'],['tools/audit-inbound-links.mjs'],['tools/audit-page-weight.mjs'],['tools/audit-sitemap-indexability.mjs']];
 fs.mkdirSync('.vercel/rice-checks',{recursive:true});
 for(const args of checks){const out=execFileSync(process.execPath,args,{encoding:'utf8',maxBuffer:16*1024*1024});fs.writeFileSync(path.join('.vercel/rice-checks',path.basename(args[0])+'.log'),out);console.log(path.basename(args[0])+': PASS')}
 const rendered=verifyRendered('public',{families:['ingredient']});
 fs.writeFileSync(receipt,JSON.stringify({schema_version:1,code_commit:commit,checks,rendered,files:snapshot()},null,2));
 console.log('Recorded checked static package.');
}else{
 const recorded=JSON.parse(fs.readFileSync(receipt,'utf8'));
 if(recorded.code_commit!==commit||JSON.stringify(snapshot())!==JSON.stringify(recorded.files))throw Error('Static release differs from its checked receipt');
 verifyRendered('public',{families:['ingredient']});
 console.log(`Verified ${recorded.files.length} static files against the checked release receipt.`);
}
