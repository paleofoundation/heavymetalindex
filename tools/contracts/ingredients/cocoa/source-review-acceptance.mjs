import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import assert from 'node:assert/strict';import puppeteer from 'puppeteer';import {root,evidenceDir} from './build.mjs';
const base=path.join(root,evidenceDir),sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),receipt=JSON.parse(fs.readFileSync(path.join(base,'shared-source-review-receipt.json'),'utf8'));
for(const r of receipt.records)assert.equal(sha(path.join(root,r.path)),r.after_sha256);
const browser=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox']}),checks=[],errors=[];
try{
 for(const r of receipt.records){
  const key=path.basename(r.path,'.md'),page=await browser.newPage();await page.setViewport({width:1440,height:1000});page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8795/ingredients/cocoa.html',{waitUntil:'networkidle0'});
  const cite=await page.$(`sup.cite > a[href$="/${key}"]`);assert(cite,`Missing Cocoa citation:${key}`);await cite.focus();await page.keyboard.press('Enter');await page.waitForFunction(k=>location.pathname.endsWith('/'+k),{},key);
  const content=await page.$eval('article',e=>({text:e.innerText,headings:[...e.querySelectorAll('h1,h2,h3')].map(x=>x.innerText)}));
  assert(!content.headings.some(t=>/^(Certification|Courses?|App)$/i.test(t)));assert(!/(?:^|\n)\s*(?:Certification|Courses?|App)\s*:/i.test(content.text));assert(!/\bHMTc\b|HMT&C|\bP95\b/i.test(content.text));
  if(key.startsWith('hands')){assert(content.text.includes('2018 or 2019'));assert(content.text.includes('do not establish'));}
  if(key.startsWith('oliveira2021')){assert(content.text.includes('homogenized with shell'));assert(content.text.includes('not a measured zero'));assert(content.text.includes('journal’s complete tables have not been independently reconciled'));assert(content.text.includes('<0.015'));assert(content.text.includes('0.0015'));}
  if(key.startsWith('fechner')){assert(!/12,?482\s+(?:assayed|cocoa samples|powder samples)/i.test(content.text));}
  await page.screenshot({path:path.join(base,'browser-source-review',`${key}-source.png`),fullPage:false});checks.push({source:key,path:r.path,source_sha256:r.after_sha256,keyboard_citation_navigation:true,final_url:page.url(),internal_use_notes_absent:true,scientific_qualification_retained:true,heading_count:content.headings.length});await page.close();
 }
 assert.equal(errors.length,0);
 fs.writeFileSync(path.join(base,'source-review-acceptance.json'),JSON.stringify({status:'pass',completedAt:new Date().toISOString(),candidate_sha256:sha(path.join(base,'candidate/cocoa.md')),receipt_sha256:sha(path.join(base,'shared-source-review-receipt.json')),checks,errors,limits:receipt.scientific_limits},null,2)+'\n');
 console.log(JSON.stringify({status:'pass',source_navigation_checks:checks.length,errors}));
}finally{const timer=setTimeout(()=>browser.process()?.kill('SIGTERM'),3000);await browser.close();clearTimeout(timer);}
