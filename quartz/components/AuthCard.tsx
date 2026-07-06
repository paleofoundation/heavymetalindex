import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"

// Static auth screens (login / signup) for Heavy Metal Index — DESIGN ONLY.
// The forms are non-functional placeholders: real authentication lives in the
// separate Institute for Contaminant Standards application, not this static
// wiki. Structure is adapted from microbiomemedicine.com's captured auth pages
// (2026-07-01), restyled in HMI burgundy, enlarged, with a Google sign-in
// (Examine-style — NOT present on mm) and HMI's own role taxonomy.
//
// DRAFTS for Karen to finalize: the role list, which fields we retain, and the
// incentive ("carrot") copy. Nothing here is wired to a backend.

// Multicolour Google "G".
const GoogleG = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
    />
    <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
    />
  </svg>
)

// DRAFT role taxonomy — Karen to confirm/extend.
const ROLES: { value: string; label: string; default?: boolean }[] = [
  { value: "regulator", label: "I'm a Regulator" },
  { value: "retailer", label: "I'm a Retailer or distributor" },
  { value: "brand", label: "I'm a Brand" },
  { value: "researcher", label: "I'm a Researcher or journalist" },
  { value: "individual", label: "I'm an Individual", default: true },
]

export default (() => {
  const AuthCard: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = (fileData.slug ?? "login") as FullSlug
    const mode = slug.endsWith("signup") ? "signup" : "login"
    const loginHref = resolveRelative(slug, "login" as SimpleSlug)
    const signupHref = resolveRelative(slug, "signup" as SimpleSlug)

    if (mode === "login") {
      return (
        <div class="hmi-auth-card">
          <h1 class="hmi-auth-title">Log in</h1>
          <p class="hmi-auth-sub">
            Access your saved evidence packets, followed pages, and category alerts.
          </p>
          <a class="hmi-auth-google" href="#" role="button">
            <GoogleG />
            <span>Log in with Google</span>
          </a>
          <div class="hmi-auth-or">
            <span>or</span>
          </div>
          <form class="hmi-auth-form" {...({ onsubmit: "return false" } as any)}>
            <label class="hmi-auth-field">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" autocomplete="email" />
            </label>
            <label class="hmi-auth-field">
              <span>Password</span>
              <input type="password" placeholder="Password" autocomplete="current-password" />
            </label>
            <button type="button" class="hmi-auth-submit">
              Log in
            </button>
          </form>
          <p class="hmi-auth-foot">
            Don't have an account? <a href={signupHref}>Request access</a>
          </p>
        </div>
      )
    }

    return (
      <div class="hmi-auth-card hmi-auth-card--wide">
        <h1 class="hmi-auth-title">Request access</h1>
        <p class="hmi-auth-sub">
          Get early access to the index, save evidence packets, and be alerted when new findings
          land in the categories you care about.
        </p>
        <a class="hmi-auth-google" href="#" role="button">
          <GoogleG />
          <span>Sign up with Google</span>
        </a>
        <div class="hmi-auth-or">
          <span>or</span>
        </div>
        <form class="hmi-auth-form" {...({ onsubmit: "return false" } as any)}>
          <div class="hmi-auth-roles">
            {ROLES.map((r) => (
              <label class="hmi-auth-radio">
                <input type="radio" name="user_role" value={r.value} checked={r.default} />
                <span>{r.label}</span>
              </label>
            ))}
          </div>
          <label class="hmi-auth-field">
            <span>Full name</span>
            <input type="text" placeholder="Jane Doe" name="name" />
          </label>
          <label class="hmi-auth-field">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" name="email" />
          </label>
          <label class="hmi-auth-field">
            <span>Organization</span>
            <input type="text" placeholder="Company, agency, or lab" name="organization" />
          </label>
          <label class="hmi-auth-field">
            <span>Categories of interest</span>
            <input type="text" placeholder="Lead, infant formula, seafood…" name="interest_areas" />
          </label>
          <label class="hmi-auth-field">
            <span>Password</span>
            <input type="password" placeholder="Password" name="password" />
          </label>
          <label class="hmi-auth-field">
            <span>Confirm password</span>
            <input type="password" placeholder="Confirm password" name="password_confirm" />
          </label>
          <button type="button" class="hmi-auth-submit">
            Request access
          </button>
        </form>
        <p class="hmi-auth-foot">
          Already have an account? <a href={loginHref}>Log in</a>
        </p>
      </div>
    )
  }
  return AuthCard
}) satisfies QuartzComponentConstructor
