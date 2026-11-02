import { ingredientHeroHTML, ingredientRailHTML } from "./ingredientChrome.mjs"
import approved from "../../docs/contracts/reference-design/rice-2026-10-19/approved-chrome.json"

// User-approved public markup is deliberately independent of evolving article
// metadata and source counts. See the accompanying screenshot lock and note.
export function ApprovedRiceHero() {
  return <div class={approved.hero_class} dangerouslySetInnerHTML={{ __html: approved.hero_html }} />
}
export function ApprovedRiceRail() {
  return <div style="display:contents" dangerouslySetInnerHTML={{ __html: approved.rail_html }} />
}

export function CanonicalIngredientHero({ model }: { model: unknown }) {
  return <div class={approved.hero_class} data-ingredient-presentation="rice-shared-v1" dangerouslySetInnerHTML={{ __html: ingredientHeroHTML(approved.hero_html, model) }} />
}
export function CanonicalIngredientRail({ model }: { model: unknown }) {
  return <div style="display:contents" dangerouslySetInnerHTML={{ __html: ingredientRailHTML(approved.rail_html, model) }} />
}
