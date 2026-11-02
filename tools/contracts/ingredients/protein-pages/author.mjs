// Authored-synthesis helpers for the pea protein and rice protein pages.
// A page module lists paragraphs as sentences; a cited sentence is
// [text, ...source keys]. This turns them into the shared synthesis shape
// (text, source_keys, citation_spans) that renderContractArticle renders with
// sentence-level superscripts, and writes data/evidence/syntheses/
// ingredient-<slug>-authored.json for the page builder to apply.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const OMIT = 'Uncited sentences are editorial implications, descriptive arithmetic on the cited values, proposed verification or navigation; they are not reported outcomes.';
const DASH = /[–—]/;

export function para(...sentences) {
  const parts = sentences.map(s => (Array.isArray(s) ? { text: s[0], keys: s.slice(1) } : { text: s, keys: [] }));
  for (const p of parts) {
    if (DASH.test(p.text)) throw Error(`Em or en dash in authored text: ${p.text}`);
    if (!/[.!?]["”’']?$/.test(p.text)) throw Error(`Sentence must end with punctuation: ${p.text}`);
  }
  const text = parts.map(p => p.text).join(' ');
  const source_keys = [...new Set(parts.flatMap(p => p.keys))];
  const citation_spans = parts.filter(p => p.keys.length).map(p => ({ after: p.text, source_keys: [...new Set(p.keys)] }));
  const out = { text, source_keys, citation_spans };
  if (parts.some(p => !p.keys.length)) out.citation_omission_reason = OMIT;
  return out;
}

// One section: overview paragraphs, three canonical answers (question-record
// text), optional in-section questions and general FAQs.
export function section(id, { overview, answers, questions = [], faqs = [] }) {
  if (answers.length !== 3) throw Error(`${id}: three canonical answers required`);
  const [first, ...rest] = overview;
  const presentation = { narrative: 'overview_and_questions', ...first, passages: rest };
  const passages = [
    ...questions.map(q => ({ question: q.q, ...q.a })),
    ...faqs.map(q => ({ question: q.q, ...q.a, placement: 'universal_faq' })),
  ];
  return {
    id,
    presentation,
    answers: answers.map((a, i) => ({ ...a, kind: a.kind ?? 'evidence', presentation: 'record_only', public_context_section: id, passages: i === 0 ? passages : [] })),
  };
}

export function writeAuthored(slug, record) {
  const faqs = record.sections.flatMap(s => s.answers.flatMap(a => a.passages.filter(p => p.placement === 'universal_faq')));
  if (faqs.length > 20) throw Error(`${slug}: ${faqs.length} FAQs exceeds the 20-question ceiling`);
  const file = `data/evidence/syntheses/ingredient-${slug}-authored.json`;
  fs.writeFileSync(path.join(root, file), JSON.stringify({ slug, authored_for: 'HMI-PROTEIN-PEA-RICE-1', ...record }, null, 2) + '\n');
  return { file, faqs: faqs.length };
}
