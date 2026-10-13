// Public-path checks for pages removed without a successor.
// Vercel redirects cannot return 410, so middleware uses this list.

export function normalizePublicPath(pathname: string): string {
  const hash = pathname.indexOf("#")
  const query = pathname.indexOf("?")
  let end = pathname.length
  if (hash >= 0) end = Math.min(end, hash)
  if (query >= 0) end = Math.min(end, query)
  let path = pathname.slice(0, end)
  try {
    path = decodeURIComponent(path)
  } catch {
    // Keep the raw path when percent-encoding is malformed.
  }
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1)
  if (!path.startsWith("/")) path = `/${path}`
  return path
}

export function isIntentionallyGone(pathname: string, gone: ReadonlySet<string>): boolean {
  const path = normalizePublicPath(pathname)
  if (path === "/dossiers" || path.startsWith("/dossiers/")) return true
  return gone.has(path)
}
