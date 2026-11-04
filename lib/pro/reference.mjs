import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';

const ingredients = new Set(['rice-protein','pea-protein']);
export async function getReference(ingredient) {
  if (!ingredients.has(ingredient)) return null;
  const data = JSON.parse(await fs.readFile(new URL(`../../data/pro/reference/${ingredient}.json`, import.meta.url), 'utf8'));
  const { sha256, ...payload } = data;
  if (createHash('sha256').update(JSON.stringify(payload)).digest('hex') !== sha256) {
    throw new Error('Reference integrity check failed');
  }
  return data;
}

export function referenceSummary(data) {
  return { ...data, references: data.references.map(({ members, ...summary }) => summary) };
}
