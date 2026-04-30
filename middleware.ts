import { next } from "@vercel/functions"

const PROTECTED_PREFIXES = ["/staff", "/admin", "/workbench", "/standards-workbench"]
const STAFF_USER_ENV = "HMI_STAFF_USER"
const STAFF_PASSWORD_ENV = "HMI_STAFF_PASSWORD"

const staffHeaders = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
}

export const config = {
  matcher: [
    "/staff",
    "/staff/:path*",
    "/admin",
    "/admin/:path*",
    "/workbench",
    "/workbench/:path*",
    "/standards-workbench",
    "/standards-workbench/:path*",
  ],
}

export default function middleware(request: Request) {
  const url = new URL(request.url)

  if (!isProtectedPath(url.pathname)) {
    return next()
  }

  const username = process.env[STAFF_USER_ENV]
  const password = process.env[STAFF_PASSWORD_ENV]

  if (!username || !password) {
    return new Response("Staff access is not configured.", {
      status: 503,
      headers: staffHeaders,
    })
  }

  if (!isAuthorized(request.headers.get("authorization"), username, password)) {
    return new Response("Authentication required.", {
      status: 401,
      headers: {
        ...staffHeaders,
        "WWW-Authenticate": 'Basic realm="Heavy Metal Index Staff", charset="UTF-8"',
      },
    })
  }

  return next({ headers: staffHeaders })
}

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

function isAuthorized(header: string | null, username: string, password: string): boolean {
  const credentials = parseBasicCredentials(header)

  if (!credentials) {
    return false
  }

  const [providedUsername, providedPassword] = credentials
  return secureCompare(providedUsername, username) && secureCompare(providedPassword, password)
}

function parseBasicCredentials(header: string | null): [string, string] | null {
  const prefix = "Basic "

  if (!header?.startsWith(prefix)) {
    return null
  }

  try {
    const decoded = atob(header.slice(prefix.length).trim())
    const separator = decoded.indexOf(":")

    if (separator < 0) {
      return null
    }

    return [decoded.slice(0, separator), decoded.slice(separator + 1)]
  } catch {
    return null
  }
}

function secureCompare(left: string, right: string): boolean {
  const encoder = new TextEncoder()
  const leftBytes = encoder.encode(left)
  const rightBytes = encoder.encode(right)
  const length = Math.max(leftBytes.length, rightBytes.length)
  let mismatch = leftBytes.length ^ rightBytes.length

  for (let index = 0; index < length; index += 1) {
    mismatch |= (leftBytes[index] ?? 0) ^ (rightBytes[index] ?? 0)
  }

  return mismatch === 0
}
