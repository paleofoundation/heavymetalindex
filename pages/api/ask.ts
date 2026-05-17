// Ask the Index — Next.js Pages Router entry point.
//
// Per docs/ask-the-index-spec.md, the canonical handler lives in `api/ask.js`
// (the Vercel Functions location used by this Quartz-based deploy). This file
// is the Next.js Pages Router shim: if the project ever migrates from
// Quartz + Vercel Functions to Next.js, this is the route Next.js will mount,
// and it re-exports the same handler so behavior stays identical.
//
// Today the live request handler is `api/ask.js`; vercel.json declares it
// under `functions["api/ask.js"]`. This file is the spec'd path that
// downstream readers (CI, code review, the Implementation status section of
// the spec) look for when they expect a Next.js layout.
//
// The handler signature matches both Vercel Functions and Next.js Pages
// Router (`(req: NextApiRequest, res: NextApiResponse) => Promise<void>`),
// so this shim works without modification under either runtime.

// @ts-expect-error — api/ask.js is plain ESM; types omitted by design.
import handler from "../../api/ask.js"

export default handler

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "32kb",
    },
  },
}
