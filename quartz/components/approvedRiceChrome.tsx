import approved from "../../docs/contracts/reference-design/rice-2026-10-19/approved-chrome.json"

// User-approved public markup is deliberately independent of evolving article
// metadata and source counts. See the accompanying screenshot lock and note.
export function ApprovedRiceHero() {
  return <div class={approved.hero_class} dangerouslySetInnerHTML={{ __html: approved.hero_html }} />
}
export function ApprovedRiceRail() {
  return <div style="display:contents" dangerouslySetInnerHTML={{ __html: approved.rail_html }} />
}
