import { next } from "@vercel/functions";

const PROTECTED_PREFIXES = [
  "/staff",
  "/admin",
  "/workbench",
  "/standards-workbench",
];
const LOGIN_PATH = "/staff/login";
const LOGOUT_PATH = "/staff/logout";
const STAFF_USER_ENV = "HMI_STAFF_USER";
const STAFF_PASSWORD_ENV = "HMI_STAFF_PASSWORD";
const STAFF_SESSION_SECRET_ENV = "HMI_STAFF_SESSION_SECRET";
const STAFF_SESSION_COOKIE = "hmi_staff_session";
const SESSION_SECONDS = 8 * 60 * 60;

const staffHeaders = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
};

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
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);

  if (!isProtectedPath(url.pathname)) {
    return next();
  }

  const username = process.env[STAFF_USER_ENV];
  const password = process.env[STAFF_PASSWORD_ENV];

  if (!username || !password) {
    return renderConfigurationError();
  }

  const sessionSecret = process.env[STAFF_SESSION_SECRET_ENV] ?? password;

  if (url.pathname === LOGOUT_PATH) {
    return redirectToLogin({
      message: "signed-out",
      setCookie: clearSessionCookie(),
    });
  }

  if (url.pathname === LOGIN_PATH) {
    return handleLoginRequest(request, url, username, password, sessionSecret);
  }

  if (
    await hasValidSession(
      request.headers.get("cookie"),
      username,
      sessionSecret,
    )
  ) {
    return next({ headers: staffHeaders });
  }

  if (!isAuthorized(request.headers.get("authorization"), username, password)) {
    return redirectToLogin({ nextPath: `${url.pathname}${url.search}` });
  }

  const sessionCookie = await createSessionCookie(username, sessionSecret);
  return next({
    headers: {
      ...staffHeaders,
      "Set-Cookie": sessionCookie,
    },
  });
}

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

async function handleLoginRequest(
  request: Request,
  url: URL,
  username: string,
  password: string,
  sessionSecret: string,
): Promise<Response> {
  if (request.method === "GET" || request.method === "HEAD") {
    return renderLoginPage({
      message: url.searchParams.get("message"),
      nextPath: sanitizeNextPath(url.searchParams.get("next")),
    });
  }

  if (request.method !== "POST") {
    return new Response("Method not allowed.", {
      status: 405,
      headers: {
        ...staffHeaders,
        Allow: "GET, HEAD, POST",
      },
    });
  }

  const formData = await request.formData();
  const providedUsername = String(formData.get("username") ?? "");
  const providedPassword = String(formData.get("password") ?? "");
  const nextPath = sanitizeNextPath(String(formData.get("next") ?? "/staff"));

  if (
    !secureCompare(providedUsername, username) ||
    !secureCompare(providedPassword, password)
  ) {
    return renderLoginPage({
      error: "Those credentials did not match.",
      nextPath,
      username: providedUsername,
      status: 401,
    });
  }

  return new Response(null, {
    status: 303,
    headers: {
      ...staffHeaders,
      Location: nextPath,
      "Set-Cookie": await createSessionCookie(username, sessionSecret),
    },
  });
}

function isAuthorized(
  header: string | null,
  username: string,
  password: string,
): boolean {
  const credentials = parseBasicCredentials(header);

  if (!credentials) {
    return false;
  }

  const [providedUsername, providedPassword] = credentials;
  return (
    secureCompare(providedUsername, username) &&
    secureCompare(providedPassword, password)
  );
}

function parseBasicCredentials(header: string | null): [string, string] | null {
  const prefix = "Basic ";

  if (!header?.startsWith(prefix)) {
    return null;
  }

  try {
    const decoded = atob(header.slice(prefix.length).trim());
    const separator = decoded.indexOf(":");

    if (separator < 0) {
      return null;
    }

    return [decoded.slice(0, separator), decoded.slice(separator + 1)];
  } catch {
    return null;
  }
}

function secureCompare(left: string, right: string): boolean {
  const encoder = new TextEncoder();
  const leftBytes = encoder.encode(left);
  const rightBytes = encoder.encode(right);
  const length = Math.max(leftBytes.length, rightBytes.length);
  let mismatch = leftBytes.length ^ rightBytes.length;

  for (let index = 0; index < length; index += 1) {
    mismatch |= (leftBytes[index] ?? 0) ^ (rightBytes[index] ?? 0);
  }

  return mismatch === 0;
}

async function hasValidSession(
  cookieHeader: string | null,
  username: string,
  sessionSecret: string,
): Promise<boolean> {
  const cookie = getCookie(cookieHeader, STAFF_SESSION_COOKIE);

  if (!cookie) {
    return false;
  }

  const [payload, signature] = cookie.split(".");

  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = await signSessionPayload(payload, sessionSecret);

  if (!secureCompare(signature, expectedSignature)) {
    return false;
  }

  const session = parseSessionPayload(payload);

  if (!session || session.u !== username) {
    return false;
  }

  return session.exp > Math.floor(Date.now() / 1000);
}

async function createSessionCookie(
  username: string,
  sessionSecret: string,
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const payload = base64UrlEncode(
    new TextEncoder().encode(
      JSON.stringify({
        u: username,
        iat: now,
        exp: now + SESSION_SECONDS,
      }),
    ),
  );
  const signature = await signSessionPayload(payload, sessionSecret);

  return serializeCookie(STAFF_SESSION_COOKIE, `${payload}.${signature}`, {
    httpOnly: true,
    maxAge: SESSION_SECONDS,
    path: "/",
    sameSite: "Lax",
    secure: true,
  });
}

function clearSessionCookie(): string {
  return serializeCookie(STAFF_SESSION_COOKIE, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "Lax",
    secure: true,
  });
}

async function signSessionPayload(
  payload: string,
  sessionSecret: string,
): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sessionSecret),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );

  return base64UrlEncode(new Uint8Array(signature));
}

function parseSessionPayload(
  payload: string,
): { u: string; iat: number; exp: number } | null {
  try {
    const decoded = new TextDecoder().decode(base64UrlDecode(payload));
    const parsed: unknown = JSON.parse(decoded);

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "u" in parsed &&
      "iat" in parsed &&
      "exp" in parsed &&
      typeof parsed.u === "string" &&
      typeof parsed.iat === "number" &&
      typeof parsed.exp === "number"
    ) {
      return {
        exp: parsed.exp,
        iat: parsed.iat,
        u: parsed.u,
      };
    }
  } catch {
    return null;
  }

  return null;
}

function getCookie(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) {
    return null;
  }

  for (const part of cookieHeader.split(";")) {
    const [rawName, ...rawValue] = part.trim().split("=");

    if (rawName === name) {
      return rawValue.join("=");
    }
  }

  return null;
}

function serializeCookie(
  name: string,
  value: string,
  options: {
    httpOnly: boolean;
    maxAge: number;
    path: string;
    sameSite: "Lax";
    secure: boolean;
  },
): string {
  const directives = [
    `${name}=${value}`,
    `Max-Age=${options.maxAge}`,
    `Path=${options.path}`,
    `SameSite=${options.sameSite}`,
  ];

  if (options.httpOnly) {
    directives.push("HttpOnly");
  }

  if (options.secure) {
    directives.push("Secure");
  }

  return directives.join("; ");
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/u, "");
}

function base64UrlDecode(value: string): Uint8Array {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function sanitizeNextPath(nextPath: string | null): string {
  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return "/staff";
  }

  const url = new URL(nextPath, "https://heavymetalindex.com");

  if (!isProtectedPath(url.pathname) || url.pathname === LOGIN_PATH) {
    return "/staff";
  }

  return `${url.pathname}${url.search}${url.hash}`;
}

function redirectToLogin({
  message,
  nextPath = "/staff",
  setCookie,
}: {
  message?: string;
  nextPath?: string;
  setCookie?: string;
}): Response {
  const url = new URL(LOGIN_PATH, "https://heavymetalindex.com");

  if (message) {
    url.searchParams.set("message", message);
  }

  if (nextPath !== "/staff") {
    url.searchParams.set("next", sanitizeNextPath(nextPath));
  }

  const headers: HeadersInit = {
    ...staffHeaders,
    Location: `${url.pathname}${url.search}`,
  };

  if (setCookie) {
    headers["Set-Cookie"] = setCookie;
  }

  return new Response(null, {
    status: 302,
    headers,
  });
}

function renderConfigurationError(): Response {
  return renderShell({
    body: `
      <div class="hmi-login-card">
        <div class="hmi-login-kicker">Staff access</div>
        <h1>Access is not configured.</h1>
        <p>The staff portal is installed, but the required Vercel environment variables are missing.</p>
      </div>
    `,
    status: 503,
    title: "Staff Access Not Configured",
  });
}

function renderLoginPage({
  error,
  message,
  nextPath = "/staff",
  status = 200,
  username = "",
}: {
  error?: string;
  message?: string | null;
  nextPath?: string;
  status?: number;
  username?: string;
}): Response {
  const signedOut = message === "signed-out";
  const safeNextPath = sanitizeNextPath(nextPath);

  return renderShell({
    body: `
      <form class="hmi-login-card" method="post" action="${LOGIN_PATH}">
        <div class="hmi-login-kicker">Restricted access</div>
        <h1>Staff Login</h1>
        <p>Sign in to access internal Heavy Metal Index review tools.</p>
        ${signedOut ? '<div class="hmi-login-notice">You have been signed out.</div>' : ""}
        ${error ? `<div class="hmi-login-error">${escapeHtml(error)}</div>` : ""}
        <input type="hidden" name="next" value="${escapeHtml(safeNextPath)}" />
        <label>
          <span>Username</span>
          <input name="username" autocomplete="username" value="${escapeHtml(username)}" required autofocus />
        </label>
        <label>
          <span>Password</span>
          <input name="password" type="password" autocomplete="current-password" required />
        </label>
        <button type="submit">Sign in</button>
        <a href="/">Return to public index</a>
      </form>
    `,
    status,
    title: "Staff Login",
  });
}

function renderShell({
  body,
  status,
  title,
}: {
  body: string;
  status: number;
  title: string;
}): Response {
  return new Response(
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>${escapeHtml(title)} | Heavy Metal Index</title>
  <style>
    :root {
      color-scheme: light;
      --hmi-burgundy: #9a2852;
      --hmi-burgundy-dark: #77203f;
      --hmi-ink: #1f232b;
      --hmi-muted: #666a73;
      --hmi-border: #e5d8dd;
      --hmi-soft: #faf6f8;
      --hmi-white: #fff;
    }
    * { box-sizing: border-box; }
    body {
      align-items: center;
      background: linear-gradient(180deg, var(--hmi-white), var(--hmi-soft));
      color: var(--hmi-ink);
      display: flex;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      justify-content: center;
      margin: 0;
      min-height: 100vh;
      padding: clamp(1rem, 4vw, 3rem);
    }
    .hmi-login-card {
      background: var(--hmi-white);
      border: 1px solid var(--hmi-border);
      border-radius: 8px;
      box-shadow: 0 24px 70px rgba(31, 35, 43, 0.12);
      max-width: 27rem;
      padding: clamp(1.25rem, 5vw, 2rem);
      width: min(100%, 27rem);
    }
    .hmi-login-kicker {
      color: var(--hmi-burgundy);
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
    }
    h1 {
      font-size: clamp(1.8rem, 8vw, 2.4rem);
      letter-spacing: 0;
      line-height: 1.05;
      margin: 0 0 0.75rem;
    }
    p {
      color: var(--hmi-muted);
      line-height: 1.55;
      margin: 0 0 1.35rem;
    }
    label {
      display: block;
      margin: 0 0 1rem;
    }
    label span {
      color: var(--hmi-ink);
      display: block;
      font-size: 0.88rem;
      font-weight: 700;
      margin-bottom: 0.35rem;
    }
    input {
      border: 1px solid var(--hmi-border);
      border-radius: 6px;
      color: var(--hmi-ink);
      font: inherit;
      padding: 0.75rem 0.85rem;
      width: 100%;
    }
    input:focus {
      border-color: var(--hmi-burgundy);
      box-shadow: 0 0 0 3px rgba(154, 40, 82, 0.14);
      outline: none;
    }
    button {
      background: var(--hmi-burgundy);
      border: 1px solid var(--hmi-burgundy);
      border-radius: 6px;
      color: var(--hmi-white);
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      padding: 0.78rem 1rem;
      width: 100%;
    }
    button:hover { background: var(--hmi-burgundy-dark); }
    a {
      color: var(--hmi-burgundy);
      display: inline-block;
      font-weight: 700;
      margin-top: 1rem;
      text-decoration: none;
    }
    a:hover { text-decoration: underline; }
    .hmi-login-error,
    .hmi-login-notice {
      border-radius: 6px;
      line-height: 1.45;
      margin-bottom: 1rem;
      padding: 0.7rem 0.8rem;
    }
    .hmi-login-error {
      background: #fff2f4;
      border: 1px solid #efb9c4;
      color: #7c1630;
    }
    .hmi-login-notice {
      background: var(--hmi-soft);
      border: 1px solid var(--hmi-border);
      color: var(--hmi-muted);
    }
  </style>
</head>
<body>
  ${body}
</body>
</html>`,
    {
      status,
      headers: {
        ...staffHeaders,
        "Content-Type": "text/html; charset=utf-8",
      },
    },
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
