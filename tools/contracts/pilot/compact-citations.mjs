import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { renderSentenceCitations } from './sentence-citations.mjs';
import { escapeHTML as e } from './analyte-table.mjs';

// Overview and FAQ placement can differ from the order in which passages are
// compiled. Final numbering follows the emitted article, before its bibliography.
export function finalizeCompactCitations(body) {
  const ordered = new Map();
  const pattern = /(<sup class="cite">\[\[sources\/([^|\]]+)\|)\d+(\]\])/g;
  body = body.replace(pattern, (_, start, id, end) => {
    if (!ordered.has(id)) ordered.set(id, ordered.size + 1);
    return start + ordered.get(id) + end;
  });
  return { body, orderedIds: [...ordered.keys()] };
}

// One component for server-rendered numeric sentence citations. Existing client
// enhancement recognizes sup.cite and preserves this small, stable apparatus.
export function compactSentenceCitations(passage, numbers, base) {
  return renderSentenceCitations(passage).replace(/\s+\((\[\[sources\/[^\]]+\]\](?:\s+\[\[sources\/[^\]]+\]\])*)\)([.!?][”’"']?)/g, (_, group, punctuation) => {
    const ids = [...new Set([...group.matchAll(/\[\[sources\/([^\]]+)\]\]/g)].map(m => m[1]))];
    for (const id of ids) if (!numbers.has(id)) numbers.set(id, numbers.size + 1);
    ids.sort((a,b) => numbers.get(a)-numbers.get(b));
    return punctuation + ids.map(id => {
      if (!/^[a-z0-9-]+$/i.test(id)) throw Error('Invalid citation source');
      const fm = matter(fs.readFileSync(path.join(base, `wiki/sources/${id}.md`), 'utf8')).data;
      const href = `../sources/${e(id)}`;
      return `<sup class="cite">[[sources/${id}|${numbers.get(id)}]]<span class="cite-card"><span class="cite-card-head"><span class="cite-card-authors">${e([].concat(fm.authors ?? []).join(', '))} · ${e(fm.year)}</span><a class="cite-card-title" href="${href}">${e(fm.title)}</a></span><span class="cite-card-body"><span class="cite-card-journal">${e(fm.publication)}</span><a class="cite-card-review" href="${href}">Read source →</a></span></span></sup>`;
    }).join('');
  });
}
