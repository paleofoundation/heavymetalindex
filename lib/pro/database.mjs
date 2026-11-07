import { createClient } from '@supabase/supabase-js';
import { required } from './config.mjs';

const options = { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } };

// All private-result reads and writes use the verified user's JWT, so RLS applies.
export function userDatabase(token) {
  return createClient(required('SUPABASE_URL'), required('SUPABASE_PUBLISHABLE_KEY'), {
    ...options, accessToken: async () => token,
  });
}

// Billing only. Never pass this client to a result/history handler.
export function billingDatabase() {
  return createClient(required('SUPABASE_URL'), required('SUPABASE_SERVICE_ROLE_KEY'), options);
}
