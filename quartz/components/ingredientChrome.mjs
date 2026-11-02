import { pageHeroImage, heroImageRecord } from "../../tools/lib/hero-images.mjs";
import { parseFragment, serialize } from 'parse5';
const esc = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function find(node, predicate) { if(predicate(node)) return node; for(const child of node.childNodes || []) { const result=find(child,predicate);if(result)return result; } }
const hasClass = name => node => node.attrs?.some(a=>a.name==='class'&&a.value.split(' ').includes(name));
function replaceContent(node, html) { if(!node)throw Error('Missing canonical ingredient chrome slot');node.childNodes=parseFragment(html).childNodes;for(const child of node.childNodes)child.parentNode=node; }
function remove(node) { if(node?.parentNode)node.parentNode.childNodes=node.parentNode.childNodes.filter(n=>n!==node); }
function attr(node,name,value) { const existing=node.attrs.find(a=>a.name===name);if(existing)existing.value=value;else node.attrs.push({name,value}); }

function validateModel(model) {
  if (!model || !/^[a-z0-9-]+$/.test(model.slug) || !model.title || !model.description || !/^\d{4}-\d{2}-\d{2}$/.test(model.updated) || !Number.isInteger(model.reference_count) || !Array.isArray(model.snapshot) || model.snapshot.some(r=>!r.label || !Number.isInteger(r.count) || r.count<0) || model.snapshot.reduce((sum,r)=>sum+r.count,0)!==model.reference_count || !Array.isArray(model.key_evidence) || model.key_evidence.some(r=>!r.label || !r.text || !r.link_label || !/^#[a-z0-9-]+$/.test(r.href))) throw Error('Incomplete ingredient chrome facts');
}
// Bind ingredient facts into the exact approved Rice shell. The Rice snapshot
// itself stays frozen; author identity, markup and chrome styling have one owner.
export function ingredientHeroHTML(template, model) {
  validateModel(model);
  const tree=parseFragment(template);
  const image = pageHeroImage(`ingredients/${model.slug}`);
  if (!image) throw Error(`Missing preserved ingredient hero: ${model.slug}`);
  const imageNode = find(tree,hasClass('hero-background'));
  if (!imageNode) throw Error('Missing canonical hero image slot');
  const record = heroImageRecord(image.image);
  for (const [name, value] of Object.entries({src:image.image, alt:image.alt, width:record?.width ?? 2164, height:record?.height ?? 721})) attr(imageNode,name,String(value));
  replaceContent(find(tree,hasClass('cur')),esc(model.title));
  replaceContent(find(tree,hasClass('hero-title')),`Heavy metals in ${esc(model.title)}`);
  replaceContent(find(tree,hasClass('hero-dek')),esc(model.description));
  replaceContent(find(tree,hasClass('hero-stamp')),`Last updated: <time datetime="${esc(model.updated)}">${esc(model.updated)}</time>`);
  replaceContent(find(tree,hasClass('hero-snapshot-body')),model.snapshot.map(row=>`<div class="hero-snapshot-row"><span class="hero-snapshot-k"><a href="#references">${esc(row.label)}</a></span><span class="hero-snapshot-v">${esc(row.count)}</span></div>`).join(''));
  replaceContent(find(tree,hasClass('hero-snapshot-total')),`${esc(model.reference_count)} cited references · View bibliography`);
  return serialize(tree);
}
export function ingredientRailHTML(template, model) {
  validateModel(model);
  const tree=parseFragment(template),url=`https://heavymetalindex.com/ingredients/${model.slug}`;
  const share=find(tree,hasClass('rail-share'));
  attr(share,'data-hmi-share-post',`${model.description}\n${url}\n#FoodSafety #HeavyMetals`);
  function update(node) {
    for(const a of node.attrs || []) if(a.name==='href') {
      if(a.value.startsWith('https://twitter.com/intent/'))a.value=`https://twitter.com/intent/tweet?text=${encodeURIComponent(model.description)}&url=${encodeURIComponent(url)}&hashtags=FoodSafety%2CHeavyMetals`;
      else if(a.value.startsWith('https://www.linkedin.com/sharing/'))a.value=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      else if(a.value.startsWith('https://www.reddit.com/submit'))a.value=`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(model.title)}`;
      else if(a.value.startsWith('https://www.facebook.com/sharer/'))a.value=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      else if(a.value.startsWith('mailto:'))a.value=`mailto:?subject=${encodeURIComponent(model.title)}&body=${encodeURIComponent(model.description+'\n'+url)}`;
      else if(a.value.includes('/api/evidence-packet'))remove(node); // A local draft has no released evidence packet.
    }
    for(const child of [...(node.childNodes || [])])update(child);
  }
  update(tree);
  replaceContent(find(tree,hasClass('rail-evidence-list')),model.key_evidence.map(row=>`<div class="rail-evidence-item"><dt>${esc(row.label)}</dt><dd><span>${esc(row.text)}</span><a href="${esc(row.href)}">${esc(row.link_label)} <span aria-hidden="true">↗</span></a></dd></div>`).join(''));
  return serialize(tree);
}
