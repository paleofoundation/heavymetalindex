// Shared selection and safe row rendering for the generated source archive.
export const PAGE_SIZE = 50;
export const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fold = text => String(text).normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase();
export function sourceStatus(row, topic = '') {
  if (row.uses.some(u => !topic || u.page === topic)) return 'cited';
  if (row.candidates.some(c => !topic || c.page === topic)) return 'candidate';
  return 'uncited';
}
export function selectSources(data, state = {}) {
  const terms = fold(state.q || '').trim().split(/\s+/).filter(Boolean);
  const rows = data.sources.filter(row => {
    const relations = [...row.uses,...row.candidates];
    if (state.topic && !relations.some(u => u.page === state.topic)) return false;
    if (state.type && row.type !== state.type) return false;
    if (state.year && String(row.year ?? '') !== state.year) return false;
    if (state.metal && !row.metals.includes(state.metal)) return false;
    if (state.status === 'cited' && !row.uses.some(u=>!state.topic||u.page===state.topic)) return false;
    if (state.status === 'candidate' && !row.candidates.some(u=>!state.topic||u.page===state.topic)) return false;
    if (state.status === 'uncited' && row.uses.some(u=>!state.topic||u.page===state.topic)) return false;
    const haystack = fold([row.id,...row.aliases,row.title,row.author,row.publication,row.doi,row.type,...row.metals,...relations.map(u=>u.title)].join(' '));
    return terms.every(term => haystack.includes(term));
  });
  rows.sort((a,b) => state.sort === 'title' ? a.title.localeCompare(b.title) : state.sort === 'oldest' ? (a.year ?? Infinity)-(b.year ?? Infinity)||a.id.localeCompare(b.id) : (b.year ?? -Infinity)-(a.year ?? -Infinity)||a.id.localeCompare(b.id));
  const pages = Math.max(1,Math.ceil(rows.length/PAGE_SIZE));
  const page = Math.min(pages, Math.max(1,Number.parseInt(state.p || '1',10)||1));
  return {total:rows.length,page,pages,rows:rows.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE)};
}
const pageHref = (page, anchor) => '../'+page+(anchor ? '#'+encodeURIComponent(anchor) : '');
function relationsMarkup(items, label) {
  if (!items.length) return '';
  const item = u => `<li><a href="${escape(pageHref(u.page))}">${escape(u.title)}</a>${u.sections?.length ? ': '+u.sections.map(s=>`<a href="${escape(pageHref(u.page,s.anchor))}">${escape(s.title)}</a>`).join('; ') : ''}</li>`;
  const first = items.slice(0,3).map(item).join('');
  const more = items.length>3 ? `<details><summary>${items.length-3} more pages</summary><ul>${items.slice(3).map(item).join('')}</ul></details>` : '';
  return `<p class="source-use-label">${label}</p><ul>${first}</ul>${more}`;
}
export function renderRows(rows, offset=0, topic='') {
  return rows.map((row,i) => {
    const uses=row.uses.filter(u=>!topic||u.page===topic), candidates=row.candidates.filter(u=>!topic||u.page===topic);
    const relation=relationsMarkup(uses,'Verified citation use')+relationsMarkup(candidates,'Discovery candidate · relevance not established');
    return `<tr data-source-id="${escape(row.id)}"><td data-label="#">${offset+i+1}</td><td data-label="Citation"><a href="../sources/${escape(row.id)}">${escape(row.title)}</a><p>${escape(row.author)}${row.publication ? '. '+escape(row.publication) : ''}</p>${row.doi ? `<p>DOI: ${escape(row.doi)}</p>` : ''}${row.metadata_note ? `<p>${escape(row.metadata_note)}</p>` : ''}</td><td data-label="Year">${escape(row.year ?? 'Not recorded')}</td><td data-label="Type">${escape(row.type)}</td><td data-label="Used on the Index for">${relation || '<p>Not currently cited; no topic relationship recorded.</p>'}</td></tr>`;
  }).join('\n');
}
export function stateFromURL(url) {
  const params=new URL(url,'https://index.invalid/').searchParams;
  return Object.fromEntries(['q','topic','type','year','metal','status','sort','p'].map(key=>[key,params.get(key)||'']));
}
export function updateURL(url,state) {
  const next=new URL(url,'https://index.invalid/');
  for (const key of ['q','topic','type','year','metal','status','sort','p']) {
    if (state[key] && !(key==='p'&&String(state[key])==='1')) next.searchParams.set(key,state[key]); else next.searchParams.delete(key);
  }
  return next;
}
