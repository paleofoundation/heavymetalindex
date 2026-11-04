import { createClient } from "@supabase/supabase-js";
import { required } from "./config.mjs";

const options = {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
};

// Lab result writes and all private reads use the verified user's JWT and RLS.
export function userDatabase(token) {
  return createClient(
    required("SUPABASE_URL"),
    required("SUPABASE_PUBLISHABLE_KEY"),
    {
      ...options,
      accessToken: async () => token,
    },
  );
}

// Privileged billing and server-generated cache writes only. Never use for
// lab-result writes or private reads; those always use userDatabase and RLS.
export function billingDatabase() {
  return createClient(
    required("SUPABASE_URL"),
    required("SUPABASE_SERVICE_ROLE_KEY"),
    options,
  );
}
