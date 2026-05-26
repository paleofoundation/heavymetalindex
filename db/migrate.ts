import { migrate } from "drizzle-orm/pglite/migrator"

import { createDevDb, DEFAULT_DEV_DB_DIR } from "./client"

export async function runMigrations(location: string = DEFAULT_DEV_DB_DIR) {
  const { db, pglite } = await createDevDb(location)
  await migrate(db, { migrationsFolder: "./db/migrations" })
  return { db, pglite }
}

// Allow `tsx db/migrate.ts` to apply migrations to the default dev DB.
if (import.meta.url === `file://${process.argv[1]}`) {
  runMigrations()
    .then(({ pglite }) => pglite.close())
    .then(() => {
      console.log(`migrations applied → ${DEFAULT_DEV_DB_DIR}`)
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
