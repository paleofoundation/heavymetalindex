// Local test fixture only. Production clients use Supabase and verified Clerk JWTs.
import fs from "node:fs";
import { PGlite } from "@electric-sql/pglite";
import { STRIPE_ACCOUNT_ID } from "../../lib/pro/config.mjs";

export async function postgresFixture() {
  const db = new PGlite();
  await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
    create schema auth; grant usage on schema auth to authenticated;
    create function auth.jwt() returns jsonb language sql stable as $$ select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb $$;`);
  for (const file of [
    "202611040001_index_pro.sql",
    "202611040002_pro_comparison_cache.sql",
  ]) {
    await db.exec(
      fs.readFileSync(
        new URL(`../../supabase/migrations/${file}`, import.meta.url),
        "utf8",
      ),
    );
  }
  await db.query(
    `insert into pro_users(user_id,stripe_account_id,stripe_customer_id,status,access_until) values
    ('user_a',$1,'cus_a','active',now()+interval '1 day'),('user_b',$1,'cus_b','active',now()+interval '1 day'),
    ('user_unpaid',$1,'cus_unpaid','past_due',now()+interval '1 day')`,
    [STRIPE_ACCOUNT_ID],
  );

  const identifier = (value) => {
    if (!/^[a-z_][a-z0-9_]*$/.test(value))
      throw Error("Invalid fixture identifier");
    return `"${value}"`;
  };
  function client(userId) {
    return {
      from(table) {
        if (!["pro_users", "lab_results", "comparisons"].includes(table))
          throw Error("Invalid fixture table");
        let fields = "*",
          filters = [],
          action = "select",
          values,
          limit = 100,
          order;
        const q = {
          select(v = "*") {
            fields = v;
            return q;
          },
          eq(k, v) {
            filters.push([k, v]);
            return q;
          },
          order(k, { ascending = true } = {}) {
            order = [k, ascending];
            return q;
          },
          limit(n) {
            limit = n;
            return q;
          },
          insert(v) {
            action = "insert";
            values = v;
            return q;
          },
          delete() {
            action = "delete";
            return q;
          },
          async maybeSingle() {
            const r = await run();
            return { ...r, data: r.data?.[0] ?? null };
          },
          then(resolve, reject) {
            return run().then(resolve, reject);
          },
        };
        async function run() {
          try {
            return await db.transaction(async (tx) => {
              await tx.exec("set local role authenticated");
              await tx.query(
                `select set_config('request.jwt.claims',$1,true)`,
                [JSON.stringify({ sub: userId })],
              );
              let sql,
                params = [];
              if (action === "insert") {
                const keys = Object.keys(values);
                params = Object.values(values);
                sql = `insert into ${identifier(table)} (${keys.map(identifier).join(",")}) values (${keys.map((_, i) => `$${i + 1}`).join(",")}) returning *`;
              } else {
                params = filters.map(([, v]) => v);
                const where = filters.length
                  ? " where " +
                    filters
                      .map(
                        ([k], i) =>
                          `${identifier(table)}.${identifier(k)}=$${i + 1}`,
                      )
                      .join(" and ")
                  : "";
                if (action === "delete")
                  sql = `delete from ${identifier(table)}${where} returning *`;
                else {
                  const nested = fields.includes("comparisons(")
                    ? `,coalesce((select jsonb_agg(c) from public.comparisons c where c.lab_result_id=lab_results.id),'[]'::jsonb) as comparisons`
                    : "";
                  sql = `select ${identifier(table)}.*${nested} from ${identifier(table)}${where}${order ? ` order by ${identifier(order[0])} ${order[1] ? "asc" : "desc"}` : ""} limit ${Number(limit)}`;
                }
              }
              const { rows } = await tx.query(sql, params);
              return {
                data: rows.map((row) => ({
                  ...JSON.parse(JSON.stringify(row)),
                  ...(row.sample_date instanceof Date
                    ? {
                        sample_date: row.sample_date.toISOString().slice(0, 10),
                      }
                    : {}),
                })),
                error: null,
              };
            });
          } catch (error) {
            return { data: null, error };
          }
        }
        return q;
      },
    };
  }
  async function cache(userId, resultId, output) {
    await db.transaction(async (tx) => {
      await tx.exec("set local role service_role");
      await tx.query(`select cache_pro_comparison($1,$2,$3,$4,$5,$6,$7)`, [
        userId,
        resultId,
        output.reference_id,
        output.reference_sha256,
        output.engine_version,
        output.source_ids,
        JSON.stringify(output),
      ]);
    });
  }
  return { db, client, cache, close: () => db.close() };
}
