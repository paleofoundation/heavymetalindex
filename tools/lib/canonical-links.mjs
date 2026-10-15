export function normalizeLinkPath(pathname) {
  let value = pathname
  try { value = decodeURIComponent(value) } catch { /* Retain malformed encoding. */ }
  value = value.replace(/\/$/, "") || "/"
  if (value.endsWith(".html")) value = value.slice(0, -5)
  if (value.endsWith("/index")) value = value.slice(0, -6) || "/"
  return value
}

export function canonicalLink(href, pagePath, registry, gonePaths) {
  if (!href || href.startsWith("#")) return null
  let url
  try { url = new URL(href, `https://heavymetalindex.com${pagePath}`) } catch { return null }
  if (!/^https?:$/.test(url.protocol) || !["heavymetalindex.com", "www.heavymetalindex.com"].includes(url.hostname.toLowerCase())) return null
  const source = normalizeLinkPath(url.pathname)
  const gone = gonePaths.has(source) || source === "/dossiers" || source.startsWith("/dossiers/")
  const hasAlias = Object.hasOwn(registry.linkTargets, source)
  if (!gone && !hasAlias) return null
  const target = hasAlias ? registry.linkTargets[source] : null
  return { source, kind: gone ? "gone" : "alias", href: target ? `${encodeURI(target)}${url.search}${url.hash}` : null }
}
