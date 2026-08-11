import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// Folders kept out of the public Explorer. Two groups:
//   1. Reference-governance pages that have their own footer/home entry
//      points and would crowd the primary taxonomy (app, methodology, ...).
//   2. Internal operations and build artifacts that must never surface in
//      public navigation — ingest run logs (batch-reports), QA audits, the
//      corpus-ops queue, and the static/ JSON asset folder. Leaking these
//      reads as unfinished and undercuts the "independent reference" posture
//      (CLAUDE.md Part 2).
//
// Do NOT add `audits` or `coverage` here: the Audit dashboard and Coverage
// page are the curated, public defensibility surfaces (audience includes
// brand-legal, regulator, journalist) that Part 1 wants reviewers to find.
// They are intentionally discoverable in nav and footer.
//
// IMPORTANT: Quartz serializes this filter with filterFn.toString() and
// re-evaluates it client-side, so it must be SELF-CONTAINED — the Set has to
// be built inside the function body. A hoisted closure variable would be
// undefined in the browser and silently break the Explorer. Defined once and
// shared across both layouts so the hidden set cannot drift between them.
//
// CURRENTLY UNWIRED: the global file-tree Explorer this filtered was removed
// (see the left-rail note below), so nothing calls this today. It is exported
// rather than deleted because the hidden set is the governing list of folders
// that must never surface in public navigation, which is a Part 2 posture
// concern and not merely a nav preference. Any future component that lists
// folders publicly should filter through this rather than re-deriving the set.
export const primaryNavFilter = (node: { slugSegment: string }) => {
  const hiddenPrimaryNav = new Set([
    "app",
    "about",
    "batch-reports",
    "briefings",
    "certification",
    "contact",
    "corpus",
    "courses",
    "editorial-standards",
    "health",
    "lint",
    "log",
    "methodology",
    "microbiome",
    "overview",
    "privacy",
    "queries",
    "static",
    "studies",
    "supply-chain",
    "staff",
    "tags",
    "terms",
    "testing",
    "workbench",
  ]);
  return !hiddenPrimaryNav.has(node.slugSegment);
};

// components shared across all pages
//
// `header` is the global TopNav. renderPage.tsx lifts this array into a
// full-width <header class="hmi-topnav-shell"> OUTSIDE #quartz-root, so it spans
// the viewport as a sticky bar rather than rendering inside the centered grid.
//
// CiteThisPage moved OUT of afterBody and INTO the right rail (see
// defaultContentPageLayout.right) so the citation/provenance affordance lives in
// the actions column. RelatedPages ("See also") stays in afterBody — it is the
// rich in-body lateral-nav block, distinct from the compact left-rail
// DedicatedPages group.
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.TopNav()],
  afterBody: [
    // Self-gates to type === "brand-pre-screen-tool" (null everywhere else).
    // Lives here, visible, instead of the hidden beforeBody `.page-header`.
    Component.BrandPreScreenTool(),
    Component.Corrections(),
    // RelatedPages ("See also") removed: it rendered the SAME relatedByCategory
    // graph the right-rail "Connections" already shows compactly (cap 3),
    // including the inbound direction — a whole-graph duplicate at the page
    // bottom that read as clutter and undercut the curated-reference posture.
    // The rail keeps the compact version; the shared graph lives in relatedGraph.ts.
    //
    // The relationship apparatus (end matter, like a journal's citation network):
    //   - Backlinks ("Referenced by"): a rendered list of <a> edges — the
    //     crawlable, LLM-extractable relationship surface, overflow-capped, with
    //     sources and retired stubs excluded. Self-gates (null when empty).
    //   - Graph: the per-page LOCAL interactive graph (credibility + lateral
    //     navigation). The whole-corpus global graph is a ~4,000-node force
    //     hairball, so it is disabled; sources and retired stubs are dropped and
    //     the neighbourhood is node-capped so metal hubs stay performant. The
    //     canvas is invisible to crawlers, which is why Backlinks carries the
    //     SEO/LLMO weight and the Graph is the visual/navigation layer.
    // Both reflect the REAL concept graph because ConceptLinks folds structured
    // frontmatter relationships into file.data.links (see conceptLinks.ts).
    Component.Backlinks(),
    Component.Graph({
      enableGlobalGraph: false,
      hideOnTypes: ["source"],
      localGraph: {
        depth: 1,
        scale: 1.1,
        focusOnHover: true,
        enableRadial: false,
        removeSourcePrefixes: ["sources/"],
        removeRetired: true,
        maxNodes: 100,
      },
    }),
  ],
  footer: Component.Footer(),
};

// components for pages that display a single page (e.g. a single note)
// The public site keeps the right rail focused on document navigation.
// Dense graph and backlink widgets are useful during corpus development,
// but they compete with the primary reading path on public reference pages.
export const defaultContentPageLayout: PageLayout = {
  // The v3 hero owns the breadcrumb, title, and updated-date, and the right
  // rail owns provenance. The old beforeBody stack (Breadcrumbs / ArticleTitle /
  // ContentMeta / TagList) therefore rendered into `.page-header`, which
  // proof-design.scss hides on every non-home page — a second, invisible
  // breadcrumb <nav> and <h1> shipped to Google and screen readers on every
  // content page. Those are removed; the hero is the single source.
  //
  // ProductEvidenceSummary is intentionally retained here (still hidden). Its
  // provenance facts duplicate the hero, but its category shortcuts have no hero
  // equivalent; surfacing only those unique parts is a content task tracked as a
  // follow-up, not a mechanical slot move, so it is not rushed here.
  //
  // BrandPreScreenTool was ALSO in this hidden slot — which meant the interactive
  // lab-result comparator was invisible on its own page while the prose explained
  // a tool no one could see. It moves to the shared afterBody (visible), where it
  // self-gates to the one page whose type is "brand-pre-screen-tool".
  beforeBody: [
    Component.ProductEvidenceSummary(),
  ],
  // Curated left rail (Examine-style): a slim search, the per-page section nav,
  // and a compact cross-reference count group. The global file-tree Explorer was
  // removed — it read as a raw dump and undercut the "established reference"
  // posture; global navigation now lives in the TopNav + Search. PageTitle and
  // the left-rail AskIndex were removed as duplicates of the TopNav wordmark and
  // Ask launcher.
  // Proof's curated .snav: section accordion + the apparatus links (Sources,
  // Update History, References). Search + dark mode live in the TopNav.
  left: [
    Component.Snav(),
  ],
  // Right rail = actions / provenance column.
  //   - EvidenceHeader: the authority/evidence-basis chip (author, metals,
  //     anchor sources / corpus count) read from frontmatter.
  //   - CiteThisPage: moved from afterBody so the citation + evidence-packet
  //     affordance lives in the actions column.
  //   - Follow: placeholder control (no JS wiring yet) for a future
  //     update-subscription affordance.
  //   - SourceCitationPanel: renders only on source pages (self-gates on
  //     type === "source" / slug startsWith "sources/").
  // Proof's .rail: light action buttons + provenance card.
  right: [
    Component.Rail(),
    Component.DesktopOnly(Component.SourceCitationPanel()),
  ],
};

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  // Index/list pages render the same v3 hero, which owns the breadcrumb, title,
  // and date. The old beforeBody stack was hidden in `.page-header` here too;
  // removed for the same reason as the content layout above.
  beforeBody: [],
  // Index/list pages use the same proof rail as content pages: curated .snav
  // (section nav from the page's headings + the apparatus links) and the .rail.
  // Keeps landing pages visually consistent with the rest.
  left: [
    Component.Snav(),
  ],
  right: [
    Component.Rail(),
  ],
};
