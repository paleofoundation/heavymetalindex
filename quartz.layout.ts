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
const primaryNavFilter = (node: { slugSegment: string }) => {
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
  afterBody: [Component.Corrections(), Component.RelatedPages()],
  footer: Component.Footer(),
};

// components for pages that display a single page (e.g. a single note)
// The public site keeps the right rail focused on document navigation.
// Dense graph and backlink widgets are useful during corpus development,
// but they compete with the primary reading path on public reference pages.
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    // Reading time disabled: a reference work is consulted, not read
    // start-to-finish, so a "166 min read" estimate on a long synthesis
    // page is misleading and discouraging rather than informative. The
    // last-updated date is the meta that matters here.
    Component.ContentMeta({ showReadingTime: false }),
    // EvidenceHeader + SourceCitationPanel moved to the right rail (actions /
    // provenance column) below. They no longer render in-body to avoid
    // duplicate provenance blocks.
    Component.ProductEvidenceSummary(),
    Component.BrandPreScreenTool(),
    Component.TagList(),
  ],
  // Curated left rail (Examine-style): a slim search, the per-page section nav,
  // and a compact cross-reference count group. The global file-tree Explorer was
  // removed — it read as a raw dump and undercut the "established reference"
  // posture; global navigation now lives in the TopNav + Search. PageTitle and
  // the left-rail AskIndex were removed as duplicates of the TopNav wordmark and
  // Ask launcher.
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.DesktopOnly(Component.TableOfContents({ position: "left" })),
    Component.DesktopOnly(Component.LeftNavUtilities()),
    Component.DesktopOnly(Component.DedicatedPages()),
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
  right: [
    Component.DesktopOnly(Component.EvidenceHeader()),
    Component.DesktopOnly(Component.CiteThisPage()),
    Component.DesktopOnly(Component.Follow()),
    Component.DesktopOnly(Component.SourceCitationPanel()),
  ],
};

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false }),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  right: [],
};
