import type { Config } from "drizzle-kit"

// drizzle-kit reads this config to introspect db/schema.ts and emit SQL
// migrations into db/migrations/. The migrations are dialect-agnostic
// enough that the same files run against PGlite locally and Postgres in
// production (Vercel Marketplace / Neon).
//
// We do not point drizzle-kit at a live database connection here because
// migration *generation* does not need one and we want generation to work
// offline. The migration *runner* in db/migrate.ts opens the PGlite store
// itself.
export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  strict: true,
  verbose: true,
} satisfies Config
