import { PGlite } from "@electric-sql/pglite"
import { drizzle } from "drizzle-orm/pglite"

import * as schema from "./schema"

// Default location for the dev DB. Gitignored. A throwaway directory you
// can delete to reset state.
export const DEFAULT_DEV_DB_DIR = ".pglite"

// Create a Drizzle client backed by PGlite. Pass `:memory:` for a fresh
// in-memory DB (used by tests).
export async function createDevDb(location: string = DEFAULT_DEV_DB_DIR) {
  const pglite = await PGlite.create({ dataDir: location })
  const db = drizzle(pglite, { schema })
  return { db, pglite }
}

export type DevDb = Awaited<ReturnType<typeof createDevDb>>["db"]
export { schema }
