import fs from 'node:fs';
import { hydrateRice, readRiceAssets } from '../../release/rice-assets.mjs';
import path from 'node:path';
import { parse, parseFragment } from 'parse5';
import { root, register, sectionHeading } from '../generate.mjs';
import { anchor, loadPilot } from './compiler.mjs';
import { unpackExplorerPayload, decodeExplorerPayload } from './explorer-payload.mjs';
const text=node=>(node.nodeName==='#text'?node.value:'')+(node.childNodes||[]).map(text).join('');
export function verifyRendered(output, {families} = {}){
 const pages=[['metal','metals/cadmium'],['ingredient','ingredients/rice'],['product','products/infant-formula-powder-non-soy']];
 return pages.filter(([family])=>!families || families.includes(family)).map(([family,slug])=>{
  let html=fs.readFileSync(path.join(output,slug+'.html'),'utf8');
  if(html.includes('data-explorer-assets-url'))html=hydrateRice(html,readRiceAssets(output,html));
  if(!html.includes('text-transform:none'))throw Error(`Unit-case protection missing: ${slug}`);
  const tree=parse(html);
  const headings=[],ids=[],tables=[],elements=[];
  const walk=(node,closed=false)=>{const attrs=Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));const hidden=closed||(node.tagName==='details'&&!('open'in attrs));if(node.tagName)elements.push({node,attrs,hidden});if(attrs.id)ids.push(attrs.id);if(node.tagName==='h2')headings.push(text(node).trim().replace(/\s*#$/,''));if(node.tagName==='table')tables.push({text:text(node),hidden});for(const child of node.childNodes||[])walk(child,hidden);};walk(tree);
  if(family==='ingredient')for(const entry of elements.filter(e=>(e.attrs.class||'').split(' ').includes('sec'))) {
   const label=text(entry.node).replace(/\s*[\d,]+\s*$/,'').trim();
   if(label.split(/\s+/).length!==1)throw Error(`Main sidebar label must be one word: ${label}`);
  }
  const synthesis=loadPilot().find(s=>s.family===family);
  const expected=register.families[family].sections.map(s=>sectionHeading(s,synthesis.section_headings));
  if(JSON.stringify(headings.slice(0,12))!==JSON.stringify(expected))throw Error(`Rendered contract section order changed: ${slug}`);
  if(ids.filter(x=>/^hmi-(met|ing|prd)-\d{3}$/.test(x)).length!==36)throw Error(`Missing question anchors: ${slug}`);
  const faqs=elements.filter(e=>e.node.tagName==='details'&&(e.attrs.class||'').split(' ').includes('qa'));
  const expectedFaqs=synthesis.sections.flatMap(s=>s.answers.flatMap(a=>(a.passages||[]).filter(p=>p.question))).length;
  if(faqs.length!==expectedFaqs||faqs.some(e=>'open'in e.attrs||e.attrs['data-hmi-faq']!=='1'))throw Error(`Supplementary FAQ rendering changed: ${slug}`);
  if(elements.filter(e=>/^hmi-(met|ing|prd)-\d{3}$/.test(e.attrs.id||'')).some(e=>e.hidden))throw Error(`Narrative answer anchors hidden: ${slug}`);
  for(const section of register.families[family].sections){
   const id=sectionHeading(section,synthesis.section_headings).toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,'').trim().replace(/\s/g,'-');
   const link=elements.find(e=>e.node.tagName==='a'&&e.attrs['data-for']===id);
   if(!link)throw Error(`Section navigation missing: ${slug}/${id}`);
   if(text(link.node).trim().split(/\s+/).length>2)throw Error(`Section navigation label exceeds two words: ${slug}/${id}`);
  }
  const occurrence=tables.find(t=>/Observed maximum|Detected range/.test(t.text));if(!occurrence||occurrence.hidden)throw Error(`Occurrence table hidden or missing: ${slug}`);
  const expectedRows={metal:2,ingredient:59,product:4}[family];
  const rows=elements.filter(e=>'data-occurrence-row' in e.attrs);
  const groups=elements.filter(e=>'data-analyte-group' in e.attrs);
  if(rows.length!==expectedRows||rows.some(r=>'hidden'in r.attrs))throw Error(`Occurrence records missing from no-JS fallback: ${slug}`);
  if(groups.length!==({metal:1,ingredient:10,product:4}[family]))throw Error(`Analyte grouping changed: ${slug}`);
  if(!elements.some(e=>'data-filter-analyte'in e.attrs)||!elements.some(e=>'data-filter-region'in e.attrs))throw Error(`Missing analyte/region controls: ${slug}`);
  if(!elements.some(e=>'data-filter-year'in e.attrs)||!elements.some(e=>'data-filter-comparison'in e.attrs))throw Error(`Missing period/reference controls: ${slug}`);
  const explorer=elements.find(e=>'data-analyte-explorer'in e.attrs);
  if(!explorer||/Not assessed/.test(text(explorer.node)))throw Error(`Unhelpful confidence cell remains in comparison explorer: ${slug}`);
  const drawers=elements.filter(e=>e.node.tagName==='dialog');
  if(drawers.length!==(family==='product'?1:2)||drawers.some(d=>d.attrs['aria-modal']!=='true'))throw Error(`Missing dataset overlay: ${slug}`);
  if(elements.filter(e=>'data-open-evidence'in e.attrs).length!==expectedRows)throw Error(`Dataset drawer triggers missing: ${slug}`);
  const datasetIcons=elements.filter(e=>e.attrs.class==='hmi-dataset-icon');
  const mitigationRows=elements.filter(e=>'data-mitigation-row' in e.attrs);
  if(mitigationRows.length!==({product:0,metal:7,ingredient:11}[family]))throw Error(`Mitigation comparisons missing: ${slug}`);
  if(datasetIcons.length!==expectedRows+mitigationRows.length||datasetIcons.some(e=>e.attrs['aria-hidden']!=='true'))throw Error(`Dataset document icons missing or exposed as duplicate accessible labels: ${slug}`);
  if(elements.filter(e=>'data-open-comparison' in e.attrs).length!==expectedRows)throw Error(`Relative-position buttons missing: ${slug}`);
  if(elements.some(e=>'data-open-comparison' in e.attrs && (!text(e.node).trim() || /^[—–-]+$/.test(text(e.node).trim()))))throw Error(`Blank comparison result: ${slug}`);
  if((family!=='ingredient'&&!elements.some(e=>'data-comparison-summary' in e.attrs))||!elements.some(e=>'data-filter-comparable' in e.attrs))throw Error(`Comparison coverage or filter missing: ${slug}`);
  const effectButtons=elements.filter(e=>'data-open-effect' in e.attrs).length;
  if(effectButtons!==({product:0,metal:7,ingredient:15}[family]))throw Error(`Mitigation effect buttons missing: ${slug}`);
  if(!elements.some(e=>e.attrs['aria-label']==='About Comparison'))throw Error(`Column information controls missing: ${slug}`);
  const payloadTemplate=elements.find(e=>'data-explorer-payload'in e.attrs);
  if(!payloadTemplate)throw Error(`Missing compiled explorer payload: ${slug}`);
  const payloadRows=unpackExplorerPayload(decodeExplorerPayload(text(payloadTemplate.node)));
  for(const row of rows){const variants=payloadRows[Number(row.attrs['data-occurrence-index'])]?.variants;if(!variants?.['::']?.comparison_html?.time)throw Error(`Missing compiled comparison: ${slug}`);}
  if(family==='ingredient') {
   if(synthesis.universal_faqs) {
    const title = synthesis.universal_faqs.title || 'Universal FAQs';
    if(!headings.includes(title)||!elements.some(e=>e.node.tagName==='a'&&e.attrs['data-for']===anchor(title)&&text(e.node).trim()==='FAQs'))throw Error('FAQs section or direct navigation missing');
    if(headings.indexOf(title)>headings.indexOf('References'))throw Error('FAQs must precede References');
    if(!ids.includes('universal-faqs'))throw Error('Legacy FAQ anchor missing');
    const snavContent=elements.find(e=>e.attrs.id==='article-contents'&&e.attrs.class==='snav-content');
    const topLinks=(snavContent?.node.childNodes||[]).filter(n=>n.tagName==='div'&&(n.attrs||[]).some(a=>a.name==='class'&&a.value.split(/\s+/).includes('grp'))).flatMap(n=>(n.childNodes||[]).filter(c=>c.tagName==='a'&&(c.attrs||[]).some(a=>a.name==='class'&&a.value==='sec')));
    if(topLinks.findIndex(n=>text(n).trim()==='FAQs')!==5||text(topLinks[6]).trim()!=='References')throw Error('FAQs must be the direct sixth sidebar section immediately before References');
    if(topLinks.filter(n=>text(n).trim()==='FAQs').length!==1||topLinks.some(n=>text(n).trim()==='FAQs'&&!(n.attrs||[]).some(a=>a.name==='href'&&a.value==='#'+anchor(title))))throw Error('FAQs must link directly to its section once');
   }
   if(synthesis.source_catalogue) {
    const sourceSection=html.slice(html.indexOf('id="sources"'));
    const riceSourcesLink=elements.find(e=>e.node.tagName==='a'&&text(e.node).trim()==='Rice Sources'&&e.attrs.href&&new URL(e.attrs.href,'https://preview.invalid/ingredients/rice').searchParams.get('topic')==='ingredients/rice'&&e.attrs['data-slug']==='sources/index');
    if(!riceSourcesLink||sourceSection.includes('Legacy candidates cited outside'))throw Error('Rice must link to the filtered source catalogue without its legacy list');
    const catalogueFile=path.join(output,'sources/index.html');
    if(!fs.existsSync(catalogueFile)||!fs.existsSync(path.join(output,'static/data/source-index.json'))||!fs.existsSync(path.join(output,'static/data/source-index.csv')))throw Error('Source catalogue or downloadable assets missing');
   }
   const approved=JSON.parse(fs.readFileSync(path.join(root,'docs/contracts/reference-design/rice-2026-10-19/approved-chrome.json'),'utf8'));
   const hero=elements.find(e=>e.attrs.class===approved.hero_class);
   const rail=elements.find(e=>e.node.tagName==='aside'&&e.attrs.class==='rail');
   if(!hero||!rail||text(hero.node)!==text(parseFragment(approved.hero_html))||text(rail.node)!==text(parseFragment(approved.rail_html)))throw Error('Screenshot-locked Rice hero, byline or right sidebar changed');
   const references=elements.filter(e=>'data-baseline-reference-template'in e.attrs);
   if(references.length!==18||references.some(e=>!text(e.node).includes('HMI calculates')||!text(e.node).includes('Limitations')))throw Error('HMI reference methods missing from rendered sidebar assets');
   if(!elements.some(e=>e.node.tagName==='option'&&e.attrs.value==='hmi'&&'selected'in e.attrs))throw Error('Scoped HMI baseline is not the rice default');
   const quick=elements.filter(e=>'data-hmi-quick-read' in e.attrs);
   if(quick.length!==1||quick[0].hidden||text(quick[0].node).includes('[['))throw Error('Rice Quick Read missing, hidden or contains unrendered links');
   const quickChildren=quick[0].node.childNodes||[];
   if(!quickChildren.some(n=>n.tagName==='ul'&&(n.childNodes||[]).filter(c=>c.tagName==='li').length===3))throw Error('Rice Quick Read facets missing');
   if(headings[0]!=='Rice overview')throw Error('Rice conclusions are delayed by scope');
   const proseQuestions=elements.filter(e=>e.node.tagName==='h3'&&'data-hmi-prose-question'in e.attrs);
   const expectedQuestions=synthesis.sections.flatMap(sec=>sec.answers.filter(a=>a.prose_heading)).length;
   if(proseQuestions.length!==expectedQuestions||proseQuestions.some(e=>e.hidden))throw Error('Main reader questions are missing or collapsed');
   for(const link of synthesis.reader_links || []) {
    if(!ids.includes(link.heading_anchor))throw Error(`Reader task target missing: ${link.heading_anchor}`);
    if(!elements.some(e=>e.node.tagName==='a'&&e.attrs.href===`#${link.heading_anchor}`&&text(e.node).trim()===link.heading))throw Error(`Reader task link missing: ${link.heading}`);
   }
   const jsonLd=elements.find(e=>e.attrs.id==='hmi-page-jsonld');
   if(!jsonLd||!JSON.parse(text(jsonLd.node))['@graph'])throw Error('Rice structured metadata missing');
  }
  if(!html.includes('postscript.js?v='))throw Error(`Unversioned preview interaction bundle: ${slug}`);
  if(/Total arsenic total arsenic/.test(html))throw Error(`Duplicated analyte control label: ${slug}`);
  return {page:slug,ordered_contract_headings:12,question_anchors:36,prose_answers_visible:true,supplementary_question_accordions:faqs.length,compact_section_navigation:true,occurrence_table_visible:true,occurrence_rows:rows.length,analyte_groups:groups.length,comparison_column:true,relative_position_buttons:true,column_information_controls:true,mitigation_effect_buttons:effectButtons,dataset_document_icons:datasetIcons.length,region_year_reference_filters:true,dataset_overlay:true,no_js_findings_readable:true,result:'pass'};
 });
}
