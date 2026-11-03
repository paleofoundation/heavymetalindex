import matter from "gray-matter";
// The contract compiler is the sole writer for its adopted pilot pages.
// Legacy generators retain their behavior elsewhere. Unknown adoption fails
// closed, so a page cannot silently bypass legacy generation without an owner.
const owners = new Set([
  "data/evidence/syntheses/pilot-cadmium-v1.json",
  "data/evidence/syntheses/pilot-rice-v1.json",
  "data/evidence/syntheses/pilot-infant-formula-powder-non-soy-v1.json",
  "data/evidence/engine/ingredient/rice-protein/synthesis.json",
  "data/evidence/engine/ingredient/pea-protein/synthesis.json",
]);
export function contractOwnsPage(raw) {
  const header = String(raw).match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
  if (!header || !/^page_contract_version:/m.test(header)) return false;
  const fm = matter(raw).data;
  if (
    String(fm.page_contract_version) !== "1.0.0" ||
    !owners.has(fm.synthesis_record)
  )
    throw Error("Contract page has no registered compiler owner");
  return true;
}
