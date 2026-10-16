// One shared template per section; a page hero_image path always wins.
const templates: Record<string, string> = {
  "ingredients": "ingredients",
  "sources": "sources",
  "products": "products"
};
export function sectionHero(section: string) {
  const placeholder = templates[section];
  return placeholder ? { image: `/static/heroes/section-${placeholder}.webp` } : undefined;
}
