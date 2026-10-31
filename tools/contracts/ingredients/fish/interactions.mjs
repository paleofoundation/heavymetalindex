// Browser interaction and no-script checks for the fish preview on the chunked explorer renderer.
// Rows stay in the HTML; drawer details load from ./fish.hmi-occurrence-fish.<n>.json chunks,
// so the no-script fallback is the readable row table and article text, not inline drawers.
// Usage: node tools/contracts/ingredients/fish/interactions.mjs
import crypto from 'node:crypto';import fs from 'node:fs';import http from 'node:http';import path from 'node:path';import assert from 'node:assert/strict';import puppeteer from 'puppeteer';
import {root,auditDir} from './build.mjs';
const preview=path.join(root,auditDir,'preview'),html=path.join(preview,'ingredients/fish.html'),out=path.join(root,auditDir,'browser');fs.mkdirSync(out,{recursive:true});
const types={'.html':'text/html; charset=utf-8','.json':'application/json','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2'};
const server=http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]);if(p.endsWith('/'))p+='index.html';const f=path.join(preview,p);const file=fs.existsSync(f)?f:fs.existsSync(f+'.html')?f+'.html':null;if(!file||!file.startsWith(preview)){res.writeHead(404);res.end();return;}res.writeHead(200,{'content-type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const url=`http://127.0.0.1:${server.address().port}/ingredients/fish.html`;
const expectedRows=JSON.parse(fs.readFileSync(path.join(root,auditDir,'row-parity.json'),'utf8')).length;
const delay=ms=>new Promise(r=>setTimeout(r,ms));
const browser=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox']});
const reports=[];
try{
 for(const width of [1440,390]){
  const p=await browser.newPage();const errors=[];p.on('pageerror',e=>errors.push(String(e)));p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  await p.setViewport({width,height:width===390?844:1000,deviceScaleFactor:1});await p.goto(url,{waitUntil:'load',timeout:300000});
  await p.waitForSelector('#hmi-occurrence-fish[data-explorer-ready="true"]',{timeout:300000});const c={};const base='#hmi-occurrence-fish';
  c.rows=await p.$$eval(base+' [data-occurrence-row]',r=>r.length);
  c.hero_loaded=await p.$eval('img.hero-background',i=>i.complete&&i.naturalWidth>0);
  c.filters_collapsed=await p.$eval(base+' [data-explorer-filters]',e=>!e.open&&!e.hidden);
  await p.click(base+' [data-explorer-filters] > summary');await p.select(base+' [data-filter-analyte]','Cd');await delay(500);
  c.cadmium_visible_rows=await p.$$eval(base+' [data-occurrence-row]',rs=>rs.filter(e=>!e.hidden&&e.closest('[data-analyte-group]')?.dataset.analyteGroup!=='Cd').length===0);
  await p.click(base+' [data-reset-explorer]');await delay(500);c.reset=await p.$eval(base+' [data-filter-analyte]',e=>e.value==='');
  const trigger=base+' [data-occurrence-row]:not([hidden]) [data-open-finding]';await p.click(trigger);await p.waitForSelector(base+' dialog[open]',{timeout:60000});await delay(800);
  c.drawer_loaded_from_chunk=await p.$eval(base+' dialog [data-drawer-body]',e=>e.innerText.trim().length>40);
  await p.keyboard.press('Escape');await delay(200);c.escape_closes_and_returns_focus=await p.$eval(base+' dialog',e=>!e.open)&&await p.$eval(trigger,e=>document.activeElement===e);
  await p.click(base+' [data-occurrence-row]:not([hidden]) [data-open-comparison]');await p.waitForSelector(base+' dialog[open]');await delay(500);
  c.comparison_drawer=await p.$eval(base+' dialog [data-drawer-body]',e=>e.innerText.trim().length>40);await p.keyboard.press('Escape');await delay(200);
  c.mitigation_rows=await p.$$eval('[data-mitigation-row]',r=>r.length);
  await p.$eval('h2#fish-faqs',e=>window.scrollTo({top:e.getBoundingClientRect().top+scrollY-90}));await p.click('#fish-faqs ~ details.qa summary');c.faq_opens=await p.$eval('#fish-faqs ~ details.qa',e=>e.open);
  c.citation_font_px=await p.$eval('sup.cite a',e=>Number.parseFloat(getComputedStyle(e).fontSize));
  c.no_horizontal_overflow=await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2);
  c.console_errors=errors;await p.screenshot({path:path.join(out,`fish-${width}-top.png`)});
  assert.equal(c.rows,expectedRows);for(const k of ['hero_loaded','filters_collapsed','cadmium_visible_rows','reset','drawer_loaded_from_chunk','escape_closes_and_returns_focus','comparison_drawer','faq_opens','no_horizontal_overflow'])assert.equal(c[k],true,`${width}: ${k}`);
  assert.equal(c.mitigation_rows,12);assert.deepEqual(errors,[]);
  reports.push({width,checks:c});await p.close();console.log('width',width,'ok');
 }
 const no=await browser.newPage();await no.setJavaScriptEnabled(false);await no.setViewport({width:390,height:844});await no.goto(url,{waitUntil:'domcontentloaded',timeout:300000});
 const fallback=await no.evaluate(()=>({rows:document.querySelectorAll('[data-occurrence-row]').length,
  finding_text:[...document.querySelectorAll('[data-occurrence-row] [data-row-finding]')].slice(0,50).every(e=>e.textContent.trim().length>0),
  filters_hidden:[...document.querySelectorAll('[data-explorer-controls],[data-explorer-filters]')].every(e=>e.hidden||getComputedStyle(e).display==='none'),
  chunk_sources:document.querySelectorAll('[data-explorer-chunk][data-src]').length,
  mitigation_evidence_inline:document.querySelectorAll('[data-mitigation-row] [data-evidence-content]').length,
  article_readable:document.querySelector('article')?.textContent.includes('1,210–1,214 µg/kg')}));
 await no.close();
 assert.equal(fallback.rows,expectedRows);assert(fallback.finding_text);assert(fallback.filters_hidden);assert(fallback.chunk_sources>0);assert.equal(fallback.mitigation_evidence_inline,12);assert(fallback.article_readable);
 const chunks=fs.readdirSync(path.join(preview,'ingredients')).filter(f=>/^fish\.hmi-occurrence-fish\.\d+\.json$/.test(f));assert.equal(chunks.length,fallback.chunk_sources);
 const record={html_sha256:crypto.createHash('sha256').update(fs.readFileSync(html)).digest('hex'),html_bytes:fs.statSync(html).size,reports,no_script:{...fallback,chunk_files:chunks.length}};
 fs.writeFileSync(path.join(out,'interactions.json'),JSON.stringify(record,null,2)+'\n');console.log(JSON.stringify({no_script:record.no_script,html_bytes:record.html_bytes}));
}finally{await browser.close();server.close();}
