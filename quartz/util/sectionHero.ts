// One template per section. A page's hero_image path always wins.
// Other sections are enabled in their own rollout PRs.
const templates: Record<string, string> = {
  ingredients: "ingredients",
};
export function sectionHero(section: string) {
  const placeholder = templates[section];
  return placeholder
    ? { image: `/static/heroes/section-${placeholder}.webp` }
    : undefined;
}
