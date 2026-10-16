// One shared template per section; a page hero_image path always wins.
const templates: Record<string, string> = {
  "ingredients": "ingredients",
  "sources": "sources",
  "products": "products",
  "synthesis": "synthesis",
  "regulators": "regulations",
  "testing": "sources",
  "mitigation": "sources",
  "supply-chain": "products",
  "microbiome": "sources",
  "corpus": "synthesis"
};
export function sectionHero(section: string) {
  const placeholder = templates[section];
  return placeholder ? { image: `/static/heroes/section-${placeholder}.webp` } : undefined;
}
