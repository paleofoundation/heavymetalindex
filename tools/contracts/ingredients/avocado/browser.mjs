import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer';
import {root,auditDir} from './build.mjs';
const out=path.join(root,auditDir,'browser');fs.mkdirSync(out,{recursive:true});
const origin='http://127.0.0.1:8897',prefix=origin;
const browser=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--no-sandbox']});
const receipt={date:'2026-10-22',checks:[],errors:[],limitations:[]};
const scroll=async(page,selector)=>{await page.$eval(selector,e=>e.scrollIntoView({block:'center',behavior:'instant'}));};
try{
 for(const width of [1440,390]){
  const perWidth=[];
  for(const slug of ['rice','avocado']){
   const page=await browser.newPage();await page.setViewport({width,height:1000,deviceScaleFactor:1});page.on('pageerror',e=>receipt.errors.push({width,slug,error:e.message}));
   await page.goto(`${prefix}/ingredients/${slug}.html`,{waitUntil:'networkidle0'});await page.waitForSelector('[data-explorer-ready]');await page.evaluate(()=>document.fonts.ready);
   const state=await page.evaluate(()=>{
    const h=document.querySelector('.hero-band'),i=h.querySelector('.hero-background'),s=getComputedStyle(i),r=i.getBoundingClientRect();
    return {width:innerWidth,documentWidth:document.documentElement.scrollWidth,hero:{src:i.getAttribute('src'),alt:i.alt,loaded:i.complete&&i.naturalWidth>0,natural:[i.naturalWidth,i.naturalHeight],rect:{width:r.width,height:r.height},fit:s.objectFit,position:s.objectPosition,opacity:s.opacity,overlay:getComputedStyle(h,'::after').background},cites:[...new Set([...document.querySelectorAll('sup.cite>a')].filter(e=>e.getClientRects().length).map(e=>getComputedStyle(e).fontSize))],quickLinks:[...document.querySelectorAll('[data-hmi-quick-read] a')].map(a=>({href:a.getAttribute('href'),cite:!!a.closest('sup.cite')})),filters:[...document.querySelectorAll('[data-explorer-filters],[data-mitigation-filters]')].map(e=>({open:e.open,hidden:e.hidden})),grids:[...document.querySelectorAll('.hmi-analyte-table')].map(t=>({collapse:getComputedStyle(t).borderCollapse,outer:getComputedStyle(t.parentElement).borderWidth,shadow:getComputedStyle(t.parentElement).boxShadow})),faq:document.querySelectorAll('[data-hmi-faq]').length,rows:document.querySelectorAll('[data-occurrence-row]').length,controls:document.querySelectorAll('[data-mitigation-row]').length};
   });assert(state.hero.loaded);assert.equal(state.documentWidth,width);assert(state.filters.every(f=>!f.open&&!f.hidden));assert(state.grids.every(g=>g.collapse==='collapse'&&g.outer==='0px'&&g.shadow==='none'));assert(state.quickLinks.every(a=>a.cite));assert(state.cites.every(x=>Math.abs(parseFloat(x)-10.6667)<.1));
   await page.screenshot({path:path.join(out,`${slug}-${width}-top.png`)});await (await page.$('.hero-band')).screenshot({path:path.join(out,`${slug}-${width}-full-hero.png`)});
   for(const [name,selector] of [['overview','[data-hmi-quick-read]'],['occurrence','[data-analyte-explorer]'],['mitigation','[data-mitigation-explorer]'],['faqs','[data-hmi-faq]']]){if(await page.$(selector)){await scroll(page,selector);await page.screenshot({path:path.join(out,`${slug}-${width}-${name}.png`)});}}
   if(slug==='avocado'){
    assert.equal(state.faq,18);assert.equal(state.rows,90);assert.equal(state.controls,2);
    for(const id of ['which-origins-and-types-appear-lower','what-preparation-and-processing-can-establish','testing-the-material-that-will-be-eaten','using-evidence-in-avocado-procurement','from-pulp-measurements-to-dietary-exposure']){await scroll(page,`#${id}`);await page.screenshot({path:path.join(out,`avocado-${width}-${id}.png`)});}
    const o='[data-analyte-explorer]';await scroll(page,o+' [data-explorer-filters]');await page.click(o+' [data-explorer-filters]>summary');await page.select(o+' [data-filter-analyte]','Ni');await page.click(o+' [data-explorer-filters]>summary');await page.click(o+' [data-explorer-filters]>summary');assert.equal(await page.$eval(o+' [data-filter-analyte]',e=>e.value),'Ni');await page.click(o+' [data-expand-all]');
    const trigger=await page.$(o+' [data-occurrence-row]:not([hidden]) [data-open-evidence]');await trigger.click();await page.waitForSelector('dialog[open]');
    const drawer=await page.$eval('dialog[open]',e=>e.innerText);assert(drawer.includes('Table 1')||drawer.includes('FDA'));assert(drawer.includes('µg/kg'));await page.screenshot({path:path.join(out,`avocado-${width}-occurrence-drawer.png`)});
    await page.evaluate(()=>{const d=document.querySelector('dialog[open]');[...d.querySelectorAll('a[href],button,summary,[tabindex]')].filter(x=>x.tabIndex>=0&&x.getClientRects().length).at(-1).focus()});await page.keyboard.press('Tab');assert(await page.evaluate(()=>document.querySelector('dialog[open]').contains(document.activeElement)));await page.keyboard.press('Escape');assert.equal(await page.$('dialog[open]'),null);assert(await trigger.evaluate(e=>e===document.activeElement));
    await scroll(page,o+' [data-reset-explorer]');await page.click(o+' [data-reset-explorer]');assert.equal(await page.$eval(o+' [data-filter-analyte]',e=>e.value),'');
    const faq=await page.$('[data-hmi-faq]>summary');await faq.focus();await page.keyboard.press('Enter');assert(await faq.evaluate(e=>e.parentElement.open));await page.keyboard.press('Enter');
    const m='[data-mitigation-explorer]';const mt=await page.$(m+' [data-mitigation-row] [data-open-mitigation]');if(mt){await mt.click();await page.waitForSelector('dialog[open]');assert((await page.$eval('dialog[open]',e=>e.innerText)).includes('No treated/untreated'));await page.screenshot({path:path.join(out,`avocado-${width}-mitigation-drawer.png`)});await page.click('dialog[open] [data-close-mitigation]');assert.equal(await page.$('dialog[open]'),null);}else receipt.limitations.push('Mitigation evidence trigger selector did not resolve');
    const urls=await page.$$eval('sup.cite>a',as=>[...new Set(as.map(a=>a.href))]);const http=await page.evaluate(async us=>Promise.all(us.map(async url=>({url,status:(await fetch(url)).status}))),urls);assert(http.every(r=>r.status===200));state.sourceHTTP=http;
    const c=await page.$('sup.cite>a');await c.focus();await page.keyboard.press('Enter');await page.waitForFunction(()=>location.pathname.includes('/sources/'));state.citationActivation=true;
    state.interactions={filter:true,retention:true,reset:true,drawer:true,tabContainment:true,escape:true,focusReturn:true,faqKeyboard:true};
   }
   perWidth.push({slug,state});await page.close();
  }
  const baseline=await browser.newPage();await baseline.setViewport({width,height:1000});await baseline.goto(`${origin}/baseline/ingredients/avocado.html`,{waitUntil:'networkidle0'});
  const legacy=await baseline.$eval('.hero-band .hero-background',i=>({src:i.getAttribute('src'),alt:i.alt,natural:[i.naturalWidth,i.naturalHeight],fit:getComputedStyle(i).objectFit,position:getComputedStyle(i).objectPosition,opacity:getComputedStyle(i).opacity}));await (await baseline.$('.hero-band')).screenshot({path:path.join(out,`baseline-avocado-${width}-full-hero.png`)});await baseline.close();
  const candidate=perWidth.find(x=>x.slug==='avocado').state.hero;for(const k of ['src','alt','natural','fit','position','opacity'])assert.deepEqual(candidate[k],legacy[k],`hero preservation ${k}`);receipt.checks.push({width,pages:perWidth,baselineHero:legacy});
 }
 const no=await browser.newPage();await no.setJavaScriptEnabled(false);await no.setViewport({width:390,height:1000});await no.goto(`${prefix}/ingredients/avocado.html`);
 const native=await no.evaluate(()=>({rows:document.querySelectorAll('[data-occurrence-row]').length,findings:document.querySelectorAll('[data-evidence-content]').length,filters:[...document.querySelectorAll('[data-explorer-controls]')].every(e=>getComputedStyle(e).display==='none')}));assert.equal(native.rows,90);assert(native.filters);assert(native.findings>=90);await no.screenshot({path:path.join(out,'avocado-390-no-script.png')});await no.close();receipt.native=native;
 assert.equal(receipt.errors.length,0);receipt.status=receipt.limitations.length?'partial':'pass';
}catch(e){receipt.status='fail';receipt.failure=e.stack;throw e;}finally{fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify(receipt,null,2)+'\n');await browser.close();}
console.log(JSON.stringify({status:receipt.status,widths:receipt.checks.map(c=>c.width),screenshots:fs.readdirSync(out).filter(x=>x.endsWith('.png')).length,limitations:receipt.limitations}));
