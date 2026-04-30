import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
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
    Component.ContentMeta(),
    Component.ProductEvidenceSummary(),
    Component.BrandPreScreenTool(),
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
      filterFn: (node) => {
        const hiddenPrimary = new Set([
          "app",
          "about",
          "certification",
          "contact",
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
          "studies",
          "supply-chain",
          "synthesis",
          "staff",
          "tags",
          "terms",
          "testing",
          "workbench",
        ]);
        return !hiddenPrimary.has(node.slugSegment);
      },
    }),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
};

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
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
      filterFn: (node) => {
        const hiddenPrimary = new Set([
          "app",
          "about",
          "certification",
          "contact",
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
          "studies",
          "supply-chain",
          "synthesis",
          "staff",
          "tags",
          "terms",
          "testing",
          "workbench",
        ]);
        return !hiddenPrimary.has(node.slugSegment);
      },
    }),
  ],
  right: [],
};
