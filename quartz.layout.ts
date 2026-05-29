import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// Top-level folders kept out of the public Explorer. Two groups:
//   1. Reference-governance pages that have their own footer/home entry
//      points and would crowd the primary taxonomy (app, methodology, ...).
//   2. Internal operations and build artifacts that must never surface in
//      public navigation — ingest run logs, QA audits, corpus-ops queues,
//      and the static/ JSON asset folder. Leaking these reads as unfinished
//      and undercuts the "independent reference" posture (CLAUDE.md Part 2).
// Single source of truth so the two page layouts cannot drift apart.
const hiddenPrimaryNav = new Set([
  "app",
  "about",
  "audits",
  "batch-reports",
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

const primaryNavFilter = (node: { slugSegment: string }) =>
  !hiddenPrimaryNav.has(node.slugSegment);

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Corrections(), Component.CiteThisPage()],
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
    Component.ProductEvidenceSummary(),
    Component.BrandPreScreenTool(),
    Component.SourceCitationPanel(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.AskIndex(),
    Component.Explorer({
      title: "Index",
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: primaryNavFilter,
    }),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
};

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.AskIndex(),
    Component.Explorer({
      title: "Index",
      folderDefaultState: "collapsed",
      useSavedState: false,
      filterFn: primaryNavFilter,
    }),
  ],
  right: [],
};
