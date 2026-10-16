import heroes from "../../data/design/generated-page-heroes.json" with { type: "json" }

// Generated pages opt in through the same two image fields as authored pages.
export function withGeneratedHero(markdown, pagePath) {
  const hero = heroes[pagePath.replaceAll("\\", "/")]
  if (!hero) return markdown
  if (!/^\/static\/heroes\/[a-z0-9-]+\.webp$/.test(hero.hero_image) || typeof hero.hero_image_alt !== "string") {
    throw new Error(`Invalid generated hero mapping: ${pagePath}`)
  }
  const close = markdown.indexOf("\n---", 4)
  if (!markdown.startsWith("---\n") || close < 0) throw new Error(`Missing frontmatter: ${pagePath}`)
  const frontmatter = markdown.slice(4, close).replace(/^hero_image(?:_alt)?:.*\n?/gm, "")
  return `---\nhero_image: ${hero.hero_image}\nhero_image_alt: ${JSON.stringify(hero.hero_image_alt)}\n${frontmatter}${markdown.slice(close)}`
}
