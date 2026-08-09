declare module "*.scss" {
  const content: string
  export = content
}

// dom custom event
interface CustomEventMap {
  prenav: CustomEvent<{}>
  nav: CustomEvent<{ url: FullSlug }>
  themechange: CustomEvent<{ theme: "light" | "dark" }>
  readermodechange: CustomEvent<{ mode: "on" | "off" }>
}

type ContentIndex = Record<FullSlug, ContentDetails>
declare const fetchData: Promise<ContentIndex>
// URL of the prebuilt, serialised FlexSearch index, injected by renderPage.tsx's
// prescript. Fetched lazily by search.inline.ts; absent on no-JS/legacy pages,
// where search falls back to building the index from `fetchData`.
declare const searchIndexPath: string | undefined
